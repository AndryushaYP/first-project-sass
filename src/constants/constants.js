import ikea from "../images/ikea.png";
import depreciation from "../images/depreciation.png";
import error from "../images/error.png";
import optimization from "../images/optimization.png";
import distortion from "../images/distortion.png";

export const cognitiveTypes = [
  {
    isDark: false,
    img: ikea,
    prevSub: "Когнитивные искажения",
    prevTitle: "Эффект ИКЕА",
    prevDescription:
      "Вы переоцениваете собственные решения, и, как следствие, недооцениваете решения других.",
    infoTitle: "КАК ПРОЯВЛЯЕТСЯ",
    infoTextOne:
      "Когнитивное искажение называется так из-за того, что потребители зачастую предпочитают покупать товары, которые они могут собрать сами, а не уже собранные кем-то.",
    infoTextTwo:
      "Мы склонны переоцнивать наши собственные решения и недооценивать решения других. Если вы когда-то работали в компании, которая использовала тупой внутренний инструмент вместо более удобного готового решения, вы понимаете, о чём я говорю.",
  },
  {
    isDark: true,
    img: optimization,
    prevSub: "Когнитивные искажения",
    prevTitle: "Преждевременная оптимизация",
    prevDescription:
      "Вы оптимизируете что-то задолго до того, как в этом появляется необходимость.",
    infoTitle: "КАК ПРОЯВЛЯЕТСЯ",
    infoTextOne:
      "Если вы добавите аэродинамический спойлер к своему старому автомобилю вместо ремонта мотора, то автомобиль не станет быстрее.",
    infoTextTwo:
      "Отличный пример: писать максимально подтюненный и высокопроизводительный код для всего лишь экспериментального проекта.",
  },
  {
    isDark: false,
    img: distortion,
    prevSub: "Когнитивные искажения",
    prevTitle: "Искажение новизны",
    prevDescription:
      "Вы даёте более высокую оценку тем событиям, которые произошли недавно, и недооцениваете более старые.",
    infoTitle: "КАК ПРОЯВЛЯЕТСЯ",
    infoTextOne:
      "Часто это искажение настигает нас, когда нужно решение проблемы и… о! Мы как раз только что решили подобную проблему! Давайте использовать это же решение, потому что оно сработало, и мы помним как!",
    infoTextTwo:
      "Вы замечаете, что пользуетесь теми же рабочими методиками раз за разом? Если да, возможно, вы смотрите на разные проблемы под одним и тем же углом.",
  },
  {
    isDark: true,
    img: depreciation,
    prevSub: "Когнитивные искажения",
    prevTitle: "Гиперболическое обесценивание",
    prevDescription:
      "Вы гонитесь за немедленной маленькой выгодой и игнорируете более крупную, недоступную сейчас, но доступную в будущем.",
    infoTitle: "КАК ПРОЯВЛЯЕТСЯ",
    infoTextOne:
      "Вы когда-нибудь откладывали написание теста? Ловили себя на использовании клавиш-стрелок в Vim? Поздравляю, у вас наблюдается гиперболическое обесценивание.",
    infoTextTwo:
      "Немедленная выгода от использования чего-то быстродоступного значительно смягчает боль, которую нужно перетерпеть, чтобы усвоить правильный синтаксис для перемещения на нужную строчку. Но как только вы поймёте как перемещаться быстрее, выгода в будущем намного выше. В итоге вы сохраните много времени.",
  },
  {
    isDark: false,
    img: error,
    prevSub: "Когнитивные искажения",
    prevTitle: "Ошибка планирования",
    prevDescription: "Неправильно рассчитывать время необходимое для завершения задачи.",
    infoTitle: "КАК ПРОЯВЛЯЕТСЯ",
    infoTextOne:
      "Одно из искажений, которое должно признать большинство из нас. И менеджеры проекта, и сами пользователи продукта — все склонны ставить сроки, в которые невозможно закончить запланированное.",
    infoTextTwo:
      "Это отлично выражается в старом афоризме: Первые 90% готового кода отнимают первые 90% времени разработки. Оставшиеся 10% отнимают вторые 90% времени разработки.",
  },
];
