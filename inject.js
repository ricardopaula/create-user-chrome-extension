
(function() {

  const cpf = gerarCPF();
  let name = 'Joao da Silva';

  if(document.getElementsByName('password')[0]){
    const email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);

    name = `${email} dos Santos`;

    document.getElementsByName('email')[0].value = `${email}@teste.com`;
    document.getElementsByName('password')[0].value = "senhateste";
  }

  if(document.getElementById('user_cpf')){
    window.scrollTo(0,document.body.scrollHeight);

    document.getElementById('user_name').value = name;
    document.getElementById('user_cpf').value = cpf;
    document.getElementById('user_birthday').value = "01/01/1990";
    document.getElementById('situation_no').click();
    document.getElementById('user_phone_attributes_phone').value = "12999999999";
    document.getElementById('user_postal_code').value = "05407-002";
    document.getElementById('user_state').value = "RJ";
    document.getElementById('user_city').value = "Rio de Janeiro";
    document.getElementById('user_address').value = "Av Brasil";
    document.getElementById('user_neighborhood').value = "Copacabana";
    document.getElementById('user_address_number').value = "1";
    document.getElementById('obs_check').click();
  }
})();

function randomiza(n) {
  var ranNum = Math.round(Math.random()*n);
  return ranNum;
}

function mod(dividendo,divisor) {
  return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function gerarCPF() {
  comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.

  var n = 9;
  var n1 = randomiza(n);
  var n2 = randomiza(n);
  var n3 = randomiza(n);
  var n4 = randomiza(n);
  var n5 = randomiza(n);
  var n6 = randomiza(n);
  var n7 = randomiza(n);
  var n8 = randomiza(n);
  var n9 = randomiza(n);
  var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;
  var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
  d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;
  retorno = '';
  if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
  else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

  return cpf;
}
