import "./BlogInfoPage.css";

export default function BlogInfoPage() {
  return (
    <>
      <div className="BlogInfo__Page">
        <h1 className="BlogInfoPage__h1">
          7 Things about web design <br /> your boss wants you to know
        </h1>
        <div style={{ padding: "40px 130px" }}>
          <img
            className="BlogInfoPage__img"
            src="https://w0.peakpx.com/wallpaper/302/833/HD-wallpaper-blue-purple-waves-shapes-gradient-abstract.jpg"
            alt=""
          />
        </div>
        {/*  */}
        <div className="container">
          <div className="content">
            <div className="New10"></div>
            <div className="post-read">
              <p className="post-meta">Posted 11/1/22</p>
              <p
                style={{
                  color: "#d0d1d3",
                  marginLeft: "400px",
                  marginTop: "10px",
                }}
              >
                4 min read
              </p>
            </div>
            <div className="New11"></div>
            <div className="author">
              <img src="img2.png" alt="" />
              <p className="author-name">By Isaiah Trotter</p>
            </div>
            <div className="post-title">
              <h1 style={{ fontWeight: "500" }}>
                Nibh mauris cursus <br /> mattis molestie a iaculis <br /> at
                erat
              </h1>
            </div>
            <div className="post-text">
              <p style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto. Sit sunt a beatae nemo qui assumenda itaque
                ex harum delectus ea magnam voluptatem. Hic error cumque aut
                reiciendis molestias ut voluptas consectetur et corrupti nihil.
              </p>
            </div>
            <ol className="ordered-list">
              <li className="list">Ordered list</li>
              <li className="list">Second item</li>
              <li className="list">And final third item</li>
            </ol>
            <ol className="unordered-list">
              <li className="list2">Unordered list</li>
              <li className="list2">Second item</li>
              <li className="list2">And final third item</li>
            </ol>
            <div className="post-text">
              <p style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto. Sit sunt a beatae nemo qui assumenda itaque
                ex harum delectus ea magnam voluptatem. Hic error cumque aut
                reiciendis molestias ut voluptas consectetur et corrupti nihil.
              </p>
            </div>
            <div>
              <p style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto.
              </p>
            </div>
            <div className="image-container">
              <img className="blog-image" src="Rectangle 13.png" alt="" />
              <p className="image-caption">Image subtitle text</p>
            </div>
            <div className="blockquote-container">
              <blockquote
                style={{ fontSize: "32px" }}
                className="blockquote-text"
              >
                “Block quote elements are standard in <br /> all blog
                templates.” — Isaiah
              </blockquote>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
