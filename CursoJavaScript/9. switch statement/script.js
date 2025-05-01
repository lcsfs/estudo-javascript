const day = `sunday`;

// switch (day) {
//   case `monday`:
//     console.log(`Treino de costa e biceps`);
//     break;
//   case `tuesday`:
//     console.log(`Treino de peito e triceps`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Treino de perna`);
//     break;
//   case `friday`:
//     console.log(`Treino de ombro`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Descanso`);
//     break;
//   default:
//     console.log(`not a valid day`);
// }

if (day === `monday`) {
  console.log(`Treino de costa e biceps`);
} else if (day === `tuesday`) {
  console.log(`Treino de peito e triceps`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`Treino de perna`);
} else if (day === `friday`) {
  console.log(`Treino de ombro`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`Descanso`);
} else {
  console.log(`not a valid day`)
}