function discountPrices(sentence: string, discount: number): string {
  const arr = sentence.split(" ");

  const nextArr = arr.map((item) => {
    const reg = /^\$(\d+)$/;

    const execRes = reg.exec(item);
    if (execRes !== null) {
      const [_, priceNumber] = execRes;

      const nextPriceNumber =
        Number(priceNumber) - Number(priceNumber) * (discount / 100);
      return `$${nextPriceNumber.toFixed(2)}`;
    }
    return item;
  });

  return nextArr.join(" ");
}
