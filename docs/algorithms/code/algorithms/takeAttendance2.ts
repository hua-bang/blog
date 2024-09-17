function takeAttendance(records: number[]): number {
  if (records[0] !== 0) {
    return 0;
  }

  for (let i = 1; i < records.length; i++) {
    if (records[i] !== i) {
      return i;
    }
  }

  return records.length;
}
