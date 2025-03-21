export const mock = {
  common: {
    buttonBackStep: "Voltar",
    buttonNextStep: "Continuar",
  },

  intro: {
    title: "Bem Vindo!",
    subTitle: "Estamos muito felizes em ter você em nossa equipe!",
    description:
      "Preencha as perguntinhas a seguir para escolher o seu presente! 🎁",
    nextStepButton: "Começar!",
  },
  finish: {
    title: "Presente resgatado! 🎉🥳",
    subTitle: "Seu pedido está em andamento!",
    description:
      "E não se preocupe, as alterações de status do envio chegam todas em seu e-mail!",
  },
  error: {
    title: "Oops! Página não encontrada.",
    subTitle: "Parece que você explorou demais, e acabou se perdendo.",
    backButton: {
      url: "/",
      label: "Voltar para página inicial",
    },
  },

  step2: { title: "Escolha o seu presente! 🎁" },

  form: {
    title: "Finalize o seu resgate",
    recipientForm: {
      title: "Dados do destinatário",
      fullName: "Nome completo",
      document: "CPF ou CNPJ",
      email: "E-mail",
    },
    address: {
      title: "Endereço de entrega",
      cep: "CEP",
      street: "Rua",
      number: "Número",
      neighborhood: "Bairro",
      document: "Bairro",
      city: "Cidade",
      state: "Estado",
      country: "País",
      complement: "Complemento",
    },
    size: {
      title: "Tamanhos",
      shirt: "Qual o seu tamanho (Camisetas)?",
    },
    extraQuestions: {
      title: "Perguntas Extras",
      hobbie: "Qual o seu hobbie?",
      birthDate: "Qual a sua data de aniversário?",
      salesTeam: "Você fará parte do time comercial?",
      iceCreamFalvors: "Selecione seus 3 sabores preferidos de sorvete",
    },
  },
};
