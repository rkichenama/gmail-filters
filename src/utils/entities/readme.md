# gmailFilters.tsh -- parses Gmail filters xml and creates a CSV file
# you can create xml of gmail filters via Gmail->Setting->Filters->Export
# by Keith Vetter 2014-04-08
#

package require tdom
package require csv

set gmail_namespaces {
    atom "http://www.w3.org/2005/Atom"
    apps "http://schemas.google.com/apps/2006"
}

# These fields describe who to filter and what to do on a match
# probably missing some
set filterFields  {
    label
    shouldArchive
    shouldMarkAsRead
    shouldTrash
    shouldNeverSpam
    shouldAlwaysMarkAsImportant
    shouldNeverMarkAsImportant
    from
    to
    subject
    doesNotHaveTheWord
    hasTheWord
}

proc ParseFilterFile {gmailFilter} {
    set fin [open $gmailFilter]
    set xml [string trim [read $fin]] ; list
    close $fin
    dom parse $xml doc
    $doc selectNodesNamespaces $::gmail_namespaces
    set root [$doc documentElement]

    set data {}
    for {set idx 1} {1} {incr idx} {
        set csvItems [ParseOneEntry $root $idx]
        if {$csvItems eq ""} break
        lappend data $csvItems
    }
    unset doc
    return [CreateCsv $data]
}
proc ParseOneEntry {root idx} {
    set idNode [$root selectNodes /*/atom:entry\[$idx\]/atom:id]
    if {$idNode eq ""} { return {} }
    set id [[$idNode firstChild] nodeValue]
    set csvItems [list $id]
    foreach name $::filterFields {
        set value [ExtractProperty $root $idx $name]
        lappend csvItems $value
    }

    return $csvItems
}
proc ExtractProperty {root idx name} {
    set node [$root selectNodes /*/atom:entry\[$idx\]/apps:property\[@name='$name'\]]
    set value ""
    if {[llength $node] == 1} { 
        set value [$node getAttribute value]
    }
    return $value
}
proc CreateCsv {data} {
    # Sort by label
    set data [lsort -index 1 -command lsortCommand $data]
    set csv "[::csv::join [concat id $::filterFields]]\n"
    foreach datum $data {
        append csv [::csv::join $datum] "\n"
    }
    return $csv
}
proc lsortCommand {a b} {
    # Sort empty strings last
    if {$a eq ""} { return 1}
    if {$b eq ""} { return -1}
    return [string compare $a $b]
}
################################################################

if {$tcl_interactive && $argc == 0} {
    set gmailFilter ~/Downloads/mailFilters.xml
    set argv $gmailFilter
    return
}

if {[llength $argv] != 1} {
    puts stderr "usage: gmailFilter gmail_exported_filter_file"
    exit 1
}
set csv [ParseFilterFile [lindex $argv 0]]
puts $csv

return