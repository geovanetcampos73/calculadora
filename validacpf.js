   // Remove caracteres não numéricos
    cpf="02714867671";
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
          console.log("CPF INVÁLIDO");
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        console.log("CPF INVALIDO");
    }
    
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto >= 10 ? 0 : resto;
    
    // Verifica o primeiro dígito verificador
    if (digito1 !== parseInt(cpf[9]) ) {
        console.log("CPF INVALIDO");
    }
    
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto >= 10 ? 0 : resto;
    
    // Verifica o segundo dígito verificador
    if (digito2 !== parseInt(cpf[10]) ) {
        console.log("CPF INVALIDO");
    }
    console.log("CPF ESTÁ CORRETO");



 
