function ehPalindromo(texto) {
    // Converte o texto para minúsculas e remove espaços em branco
    const textoMinusculo = texto.toLowerCase().replace(/\s/g, "");
  
    // Inverte a ordem do texto
    const textoInvertido = textoMinusculo.split("").reverse().join("");
  
    // Retorna true se o texto original e o texto invertido forem iguais, false caso contrário
    return textoMinusculo === textoInvertido;
  }
  
  // Exemplos de uso
  const texto1 = "arara";
  const ehPalindromo1 = ehPalindromo(texto1);
  console.log(`O texto '${texto1}' é palíndromo? ${ehPalindromo1}`); // Saída: true
  
  const texto2 = "ovo";
  const ehPalindromo2 = ehPalindromo(texto2);
  console.log(`O texto '${texto2}' é palíndromo? ${ehPalindromo2}`); // Saída: true
  
  const texto3 = "Fabiano";
  const ehPalindromo3 = ehPalindromo(texto3);
  console.log(`O texto '${texto3}' é palíndromo? ${ehPalindromo3}`); // Saída: true
  
  const texto4 = "asa";
  const ehPalindromo4 = ehPalindromo(texto4);
  console.log(`O texto '${texto4}' é palíndromo? ${ehPalindromo4}`); // Saída: true
  
  const texto5 = "Regenera";
  const ehPalindromo5 = ehPalindromo(texto5);
  console.log(`O texto '${texto5}' é palíndromo? ${ehPalindromo5}`); // Saída: true
  