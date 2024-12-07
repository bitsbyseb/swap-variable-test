const a = 1234;
const b = 5678;

function XORSwap(a: number, b: number) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
}
function ThirdVariableSwap(a: number, b: number) {
  let c;
  c = a;
  a = b;
  b = c;
}

Deno.bench({
  name: "XOR Swap",
  fn: () => {
    XORSwap(a, b);
  },
});

Deno.bench({
  name: "Third Variable Swap",
  fn: () => {
    ThirdVariableSwap(a, b);
  },
});
