// Return required bits for positive 32-bit integer (1 ≤ n ≤ 0xFFFFFFFF)
f=n=>n&&1+f(n>>>1);

/*
f = function(n) {
  if (n) { 
    return 1+f(n>>>1);
  }
  return 0;
}
*/
