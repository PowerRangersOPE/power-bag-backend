module.exports = (cliente, bag, api_key) => {

    const { endereco, cartao: { card_hash }, id: clienteID, nome, email, cpf, tel_cel1, dat_nasc } = cliente;
    const { valor } = bag;

    const address = {
        country: 'br',
        state: endereco.uf,
        city: endereco.cidade,
        neighborhood: endereco.bairro,
        street: endereco.rua,
        street_number: endereco.numero,
        zipcode: endereco.cep.replace(/[^0-9]/g, '')
    };

    const customer = {
        external_id: clienteID,
        name: nome,
        type: 'individual',
        country: 'br',
        email,
        documents: [
            {
                type: 'cpf',
                number: cpf.replace(/[^0-9]/g, '')
            }
        ],
        phone_numbers: [`+55${tel_cel1.replace(/[^0-9]/g, '')}`],
        birthday: new Date(dat_nasc).toLocaleDateString('en-CA')
    };

    const billing = {
        name: nome,
        address
    };

    const shipping = {
        name: nome,
        fee: 0,
        delivery_date: new Date().toLocaleDateString('en-CA'),
        expedited: true,
        address
    };

    const items = [];

    const body = {
        api_key,
        amount: parseInt(valor.replace(/[^0-9]/g, '')),
        card_id: card_hash,
        customer,
        billing,
        shipping,
        items
    }


  return body;
}




