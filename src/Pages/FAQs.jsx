import { useEffect, useState } from "react";
import Bannar from "../Components/Bannar";

export default function FAQs() {
  const [modal, setModal] = useState(false)

  useEffect(()=> {
    const scrollFaqs = document.getElementById("faqs")
    if(scrollFaqs){
      scrollFaqs.scrollIntoView({behavior: 'smooth'})
    }
  }, [])

  const handleFaqModal =(index)=> {
      setModal(modal=== index ? null: index)
  }

  return (
    <>
      <Bannar />
      <div id="faqs" className="faqs-w3l">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Faqs
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          {/* //tittle heading */}
          <h3 className="w3-head">Top 10 Frequently asked questions</h3>
          <div className="faq-w3agile">
            <ul className="faq">
              <li className="item1">
                <a onClick={()=> handleFaqModal(0)} role="button">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tempor vehicula ipsum nec ?
                </a>
                {
                  modal===0 && (
                  <ul>
                  <li className="subitem1">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item2">
                <a role="button" onClick={()=> handleFaqModal(1)} title="click here">
                  The standard Lorem Ipsum passage Etiam faucibus viverra libero
                  vel efficitur. Ut semper nisl ut laoreet ultrices ?
                </a>
                {
                  modal === 1 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      {" "}
                      Tincidunt ut laoreet dolore At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item3">
                <a role="button" onClick={()=> handleFaqModal(2)} title="click here">
                  Consectetuer adipiscing elit Etiam faucibus viverra libero vel
                  efficitur. Ut semper nisl ut laoreet ultrices?
                </a>
                {
                  modal ===2 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      Dincidunt ut laoreet dolore At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item4">
                <a role="button" onClick={()=> handleFaqModal(3)} title="click here">
                  Sed diam nonummy nibh euismod Etiam faucibus viverra libero
                  vel efficitur. Ut semper nisl ut laoreet ultrices?
                </a>
                {
                  modal === 3 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item5">
                <a role="button" onClick={()=> handleFaqModal(4)} title="click here">
                  Euismod tincidunt laoreet Etiam faucibus viverra libero vel
                  efficitur ?
                </a>
               {
                modal === 4 && (
                  <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
                )
               }
              </li>
              <li className="item6">
                <a role="button" onClick={()=> handleFaqModal(5)} title="click here">
                  Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices
                  ?
                </a>
                {
                  modal === 5 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item7">
                <a role="button" onClick={()=> handleFaqModal(6)} title="click here">
                  Donec ut quam ligula feugiat Ut semper nisl ut laoreet
                  ultrices ?
                </a>
                {
                  modal === 6 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item8">
                <a role="button" onClick={()=> handleFaqModal(7)} title="click here">
                  The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices
                  passage ?
                </a>
                {
                  modal ===7 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      Lorem ipsum dolor sit amet At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item9">
                <a role="button" onClick={()=> handleFaqModal(8)} title="click here">
                  Consectetuer adipiscing Ut semper nisl ut laoreet ultrices
                  elit ?
                </a>
                {
                  modal === 8 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      Lorem ipsum dolor sit amet At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
              <li className="item10">
                <a role="button" onClick={()=> handleFaqModal(9)} title="click here">
                  Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh
                  euismod ?
                </a>
                {
                  modal === 9 && (
                    <ul>
                  <li className="subitem1">
                    <p>
                      Consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
