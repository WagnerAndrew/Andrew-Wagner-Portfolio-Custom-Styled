import React from 'react';

export default function Card(props) {
  return (
    <div class='col-1-of-3'>
      <div class='card'>
        <div class='card__side card__side--front'>
          <div class={`card__picture card__picture--${props.number}`}>
            &nbsp;
          </div>
          <h4 class='card__heading'>
            <span
              class={`card__heading-span card__heading-span--${props.number}`}
            >
              {props.title}
            </span>
          </h4>
          <div class='card__details'>
            <ul>
              <li>
                <img class='card__image' src={props.image} alt={props.alt} />
              </li>
              <li>{props.li1}</li>
              <li>{props.li2}</li>
              <li>{props.li3}</li>
            </ul>
          </div>
        </div>
        <div
          class={`card__side card__side--back card__side--back-${props.number}`}
        >
          <div class='card__cta'>
            <a
              class='btn btn--white'
              href={props.AppLink}
              target='_blank'
              rel='noreferrer noopener'
            >
              View The App
            </a>
            <a
              class='btn btn--white'
              href={props.GitLink}
              target='_blank'
              rel='noreferrer noopener'
            >
              Git Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Card() {
//   return (
//     <div class='row'>
//       <div class='col-1-of-3'>
//         <div class='card'>
//           <div class='card__side card__side--front'>
//             <div class='card__picture card__picture--1'>&nbsp;</div>
//             <h4 class='card__heading'>
//               <span class='card__heading-span card__heading-span--1'>
//                 The Sea Explorer
//               </span>
//             </h4>
//             <div class='card__details'>
//               <ul>
//                 <li>3 day tours</li>
//                 <li>Up to 30 people</li>
//                 <li>2 tour guides</li>
//                 <li>Sleep in cozy hotels</li>
//                 <li>Difficulty: easy</li>
//               </ul>
//             </div>
//           </div>
//           <div class='card__side card__side--back card__side--back-1'>
//             <div class='card__cta'>
//               <div class='card__price-box'>
//                 <p class='card__price-only'>Only</p>
//                 <p class='card__price-value'>$297</p>
//               </div>
//               <a href='#popup' class='btn btn--white'>
//                 Book now!
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class='col-1-of-3'>
//         <div class='card'>
//           <div class='card__side card__side--front'>
//             <div class='card__picture card__picture--2'>&nbsp;</div>
//             <h4 class='card__heading'>
//               <span class='card__heading-span card__heading-span--2'>
//                 The Forest Hiker
//               </span>
//             </h4>
//             <div class='card__details'>
//               <ul>
//                 <li>7 day tours</li>
//                 <li>Up to 40 people</li>
//                 <li>6 tour guides</li>
//                 <li>Sleep in provided tents</li>
//                 <li>Difficulty: medium</li>
//               </ul>
//             </div>
//           </div>
//           <div class='card__side card__side--back card__side--back-2'>
//             <div class='card__cta'>
//               <div class='card__price-box'>
//                 <p class='card__price-only'>Only</p>
//                 <p class='card__price-value'>$497</p>
//               </div>
//               <a href='#popup' class='btn btn--white'>
//                 Book now!
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class='col-1-of-3'>
//         <div class='card'>
//           <div class='card__side card__side--front'>
//             <div class='card__picture card__picture--3'>&nbsp;</div>
//             <h4 class='card__heading'>
//               <span class='card__heading-span card__heading-span--3'>
//                 The Snow Adventurer
//               </span>
//             </h4>
//             <div class='card__details'>
//               <ul>
//                 <li>5 day tours</li>
//                 <li>Up to 15 people</li>
//                 <li>3 tour guides</li>
//                 <li>Sleep in provided tents</li>
//                 <li>Difficulty: hard</li>
//               </ul>
//             </div>
//           </div>
//           <div class='card__side card__side--back card__side--back-3'>
//             <div class='card__cta'>
//               <div class='card__price-box'>
//                 <p class='card__price-only'>Only</p>
//                 <p class='card__price-value'>$897</p>
//               </div>
//               <a href='#popup' class='btn btn--white'>
//                 Book now!
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
