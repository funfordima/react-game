const delay = (ms: number): Promise<number> => new Promise((resolve) => setTimeout(resolve, ms));

export default delay;
