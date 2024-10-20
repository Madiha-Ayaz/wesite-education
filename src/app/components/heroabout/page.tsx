import styles from "./hero.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <div className={styles.image}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.box_para}>
          <p className={styles.Description}>
            I am a frontend web developer focusing on responsive, dynamic, and
            user-friendly websites.
            <br></br>
            With experience in HTML, CSS, JavaScript, TypeScript, and React,
            <br></br>I aim to empower others to grow in web development through
            interactive learning.
          </p>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.background_2}>
          <div className={styles.image_2}>
            <Image
              src="/class-next-generation-virtual-classroom-for-learning-and-development-mobile.png"
              width={800}
              height={1000}
              alt="zoom meeting"
            />
          </div>
          <div className={styles.image_3}>
            <Image
              src="/class-next-generation-virtual-classroom-for-zoom.png"
              alt="image"
              height={200}
              width={500}
            />
          </div>
          <div className={styles.image_4}>
            <Image
              src="/download (1).jpeg"
              alt="image"
              height={200}
              width={500}
            />
          </div>
          <div className={styles.paragraph}>
            <p>
              Master the art of web development with our trusted online courses.
              Learn essential skills in HTML, CSS, JavaScript, and more, while
              building responsive and modern websites. Our curriculum ensures
              you stay up-to-date with the latest technologies, helping you grow
              into a confident developer.
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.box1}> +150 Courses</div>
            <div className={styles.box2}> 50,000 Total Students</div>
          </div>
        </div>
       
        <div className={styles.zoom_image}>
          <Image src="/logos.png" alt="zoom image" width={400} height={400} />
        </div>
      </div>
      <div className={styles.new_background}>
        <div>
          </div>

          <div className={styles.all_cards}>
            <div className={styles.card1}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/download (2).jpeg"
                  alt="image"
                  width={100}
                  height={100}
                  className={styles.image_card}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>Elsa</h2>
                <p className={styles.intro}> I am passinate teacher </p>
                <p>
                  <strong>Courses:</strong> python ,javascript {styles.courses}
                </p>
                <p className={styles.card_discription}>
                A passionate JavaScript teacher dedicated to helping students master coding .
                </p>
                <div className={styles.rating}>
                  <span className={styles.rating}>Rating:5/5</span>
                </div>
                <p className={styles.charge}>Charge: 3000 2/hour</p>
              </div>
            </div>
          

          
            <div className={styles.card2}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images (1).jpeg"
                  alt="image"
                  width={100}
                  height={100}
                  className={styles.image_card}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>Jack</h2>
                <p className={styles.intro}>A dedicated HTML teacher</p>
                <p>
                  <strong>Courses:</strong> Html ,Css{styles.courses}
                </p>
                <p className={styles.card_discription}>
                A dedicated HTML teacher focused on guiding students web structure and design.
                </p>
                <div className={styles.rating}>
                  <span className={styles.rating}>Rating:⭐</span>
                </div>
                <p className={styles.charge}>Charge: 2000 2/hour</p>
              </div>
            </div>
          

          
            <div className={styles.card3}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images (2).jpeg"
                  alt="image"
                  width={100}
                  height={100}
                  className={styles.image_card}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>Arden</h2>
                <p className={styles.intro}> i am passinate TypeScript teacher</p>
                <p>
                  <strong>Courses:</strong> Typescript{styles.courses}
                </p>
                <p className={styles.card_discription}>
                Passionate TypeScript teacher guiding students to master typed JavaScript.
                </p>
                <div className={styles.rating}>
                  <span className={styles.rating}>Rating:5/5</span>
                </div>
                <p className={styles.charge}>Charge: 7000 2/hour</p>
              </div>
            </div>
          

       
            <div className={styles.card4}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images (3).jpeg"
                  alt="image"
                  width={100}
                  height={100}
                  className={styles.image_card}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>M.Ali</h2>
                <p className={styles.intro}> iam passinate python teacher</p>
                <p>
                  <strong>Courses:</strong>  python,html,typescript{styles.courses}
                </p>
                <p className={styles.card_discription}>
                Passionate Python teacher guiding students to master programming.
                </p>
                <div className={styles.rating}>
                  <span className={styles.rating}>Rating:⭐</span>
                </div>
                <p className={styles.charge}>Charge: 5000 2/hour</p>
              </div>
            </div>
          

        
            <div className={styles.card5}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images (5).jpeg"
                  alt="image"
                  width={100}
                  height={100}
                  className={styles.image_card}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>Amelia</h2>
                <p className={styles.intro}> i am passinate C++ ,C teacher</p>
                <p>
                  <strong>Courses:</strong> {styles.courses}
                </p>
                <p className={styles.card_discription}>
                 teacher dedicated to helping students master programming fundamentals.
                </p>
                <div className={styles.rating}>
                  <span className={styles.rating}>Rating:⭐</span>
                </div>
                <p className={styles.charge}>Charge: 5000 2/hour</p>
              </div>
            </div>


            
            <div className={styles.card6}>
  <div className={styles.imageWrapper}>
    <Image
      src="/images (4).jpeg"
      alt="image"
      width={100}
      height={100}
      className={styles.image_card}
    />
  </div>
  <div className={styles.details}>
    <h2 className={styles.name}>Madiha</h2>
    <p className={styles.intro}></p>
    <p>
      <strong>Courses:</strong> Passionate R language teacher  {styles.courses}
    </p>
    <p className={styles.card_discription}>
    Passionate R language teacher dedicated to helping students and data analysis.
    </p>
    <div className={styles.rating}>
      <span className={styles.rating}>Rating:4/5</span>
    </div>
    <p className={styles.charge}>Charge: 5000 2/hour</p>
  </div>
</div>

















  

          </div>
        </div>
      </div>
  
  );
}
