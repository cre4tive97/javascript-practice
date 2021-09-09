function num(a) {
  let b = JSON.stringify(a);

  if (b.length % 3 === 2 && b.length >= 4) {
    let c = [...b];
    for (let i = 0; i < b.length / 3; i++) {
      c.splice(4 * i + 2, 0, ",");
    }
    c.pop();
    let result = "";
    for (let i = 0; i < c.length; i++) {
      result = result + c[i];
    }
    console.log(result);
  } else if (b.length % 3 === 1 && b.length >= 4) {
    let c = [...b];
    for (let i = 0; i < b.length / 3; i++) {
      c.splice(4 * i + 1, 0, ",");
    }
    c.pop();
    let result = "";
    for (let i = 0; i < c.length; i++) {
      result = result + c[i];
    }
    console.log(result);
  } else if (b.length % 3 === 0 && b.length >= 4) {
    let c = [...b];
    for (let i = 0; i < b.length / 3; i++) {
      c.splice(4 * i + 3, 0, ",");
    }
    c.pop();
    let result = "";
    for (let i = 0; i < c.length; i++) {
      result = result + c[i];
    }
    console.log(result);
  }
}

num(12345);
num(100000);
num(1000000);
num(112318418291512983);
