function takeAttendance(records: number[]): number {
  for(let i = 0; i < records.length; i++) {
    if(i !== records[i]) {
      return i;
    }
  }
  
  return records.length;
};