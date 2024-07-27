function takeAttendance(records: number[]): number {
  for (let i = 0; i < records.length; i++) {
    if (records[i] !== i) {
      return i;
    }
  }

  return records.length;
}
