export const hasOnlyOneTextValue = (str: string) => (
  str?.length && / OR /i.test(str)
);

export const bothCannotBeTruthy = (field2: string) => (value: boolean, { [field2]: otherValue }: any) => (
  value && otherValue
);

export default {
  label: [ hasOnlyOneTextValue ],
  smartLabelToApply: [ hasOnlyOneTextValue ],
  forwardTo: [ hasOnlyOneTextValue ],
  shouldAlwaysMarkAsImportant: [ bothCannotBeTruthy('shouldNeverMarkAsImportant') ],
  shouldNeverMarkAsImportant: [ bothCannotBeTruthy('shouldAlwaysMarkAsImportant') ],
  shouldArchive: [ bothCannotBeTruthy('shouldTrash') ],
  shouldTrash: [ bothCannotBeTruthy('shouldArchive') ],
} as Record<string, ((field: any, properties?: any) => boolean)[]>;
