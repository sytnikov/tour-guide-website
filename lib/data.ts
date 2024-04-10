import Offer1 from "/public/service1.png";
import Offer2 from "@/public/service2.png";
import Offer3 from "@/public/service3.png";
import Avatar1 from "../public/avatar1.jpg";
import Avatar2 from "@/public/avatar2.jpg";
import Avatar3 from "@/public/avatar3.jpg";
import Article1 from "../public/article1.png";
import Article2 from "@/public/article2.png";
import Article3 from "../public/article3.png";

export const navLinks = [
  "Главная",
  "Арт-консультации",
  "Прогулки",
  "Блог",
  "Об авторе",
  "Задать вопрос",
] as const;

export const yourDesires = [
  {
    text: "Рассмотреть Финляндию за пределами субъективных оценок, осуждений и восторгов."
  },
  {
    text: 'Глубже понять культурно-исторические предпосылки и процессы, лежащие в основе уже известных явлений. Ответы на вопрос "почему так?" предоставляют возможности для разработки стратегий "как с этим быть".'
  },
  {
    text: "Разложить финскую действительность на уровне менталитета и культурных кодов."
  },
  {
    text: "Помочь детям, родившимся в другой стране, формировать новую идентичность на пересечении культур, а также облегчить освоение школьных программ по истории и обществознанию."
  },
  {
    text: "Питать восторг по отношению к Финляндии: её устройству, природе, людям, культурному и гастрономическому разнообразию."
  },
  {
    text: "И, наконец, для того чтобы жить в Финляндии полной жизнью и сделать её действительно своей."
  }
] as const

export const offers = [
  {
    name: "Арт-консультации",
    description: "Объемное представление о городе за 2 часа",
    image: Offer1,
  },
  {
    name: "Городские прогулки",
    description: "Объемное представление о городе за 2 часа",
    image: Offer2,
  },
  {
    name: "Блог культуролога",
    description: "Объемное представление о городе за 2 часа",
    image: Offer3,
  },
]

export const feedbackEntries = [
  {
    avatar: Avatar1,
    name: "Дина",
    date: "15 июля 2023",
    text: "Экскурсия очень понравилась. Получила море полезной и интересной информации в том числе практической на самые разные темы. Ольга хороший собеседник, с которым легко и просто общаться и который подстраивается под ваши интересы. Она также помогла мне определиться с дальнейшей программой уже после экскурсии… если будете в Хельсинки, очень рекомендую ее. Вы не разочаруетесь.",
  },
  {
    avatar: Avatar2,
    name: "Алексей",
    date: "15 января 2024",
    text: "Экскурсия очень понравилась. Получил море полезной и интересной информации в том числе практической на самые разные темы.",
  },
  {
    avatar: Avatar3,
    name: "Элеонора",
    date: "15 марта 2024",
    text: "Экскурсия очень понравилась. Получила море полезной и интересной информации в том числе практической на самые разные темы. Ольга хороший собеседник, с которым легко и просто общаться и который подстраивается под ваши интересы. Она также помогла мне определиться с дальнейшей программой уже после экскурсии… если будете в Хельсинки, очень рекомендую ее. Вы не разочаруетесь.",
  },
] as const;

export const articles = [
  {
    image: Article1,
    name: "Финляндия в стекле. Стеклянное наследие Алвара Аалто /",
    source: "журнал Culturalist",
  },
  {
    image: Article2,
    name: "Жизнь как стекло. Стойкая и хрупкая Гуннель Нюман / ",
    source: "журнал Culturalist",
  },
  {
    image: Article3,
    name: "ВЕСЬ В ДЕЛАХ: «В другой стране ты никогда не станешь своим в доску, но в этом нет трагедии» /",
    source: "YLE.FI",
  },
] as const

export const serviceData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Colorful sneakers",
    price: "$19.99",
    description: "Some text about the product..",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Sport sneakers",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "iWatch",
    price: "$99.99",
    description: "Some text about the product..",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Water Bottle",
    price: "$14.99",
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Vans sneakers",
    price: "$38.99",
    description: "Some text about the product..",}
  // }, {
  //   id: 6,
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   name: "Coco Noir",
  //   price: "$149.99",
  //   description: "Some text about the product..",
  // },
  // {
  //   id: 7,
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   name: "Sunglasses",
  //   price: "$38.99",
  //   description: "Some text about the product..",
  // },
  // {
  //   id: 8,
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   name: "Dove cream",
  //   price: "$49.99",
  //   description: "Some text about the product..",
  // },
] as const;
