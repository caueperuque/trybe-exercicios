let statusTest = 'aprovada'

switch(statusTest){
    case 'aprovada':
        console.log('Parapéns, vocÊ foi aprovada(o)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('Informação incorreta');
}
