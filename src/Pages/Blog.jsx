import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import Cards from "../Components/AboutUs/Cards";

function Blog() {
  return (
    <div className="bg">
      <NavigationBar />
      <div className="container-fluid Topbar">
        <div className="blog-title text-center">
          <h1>Blogs</h1>
        </div>
        <div className="description">
          <div className="description-text">
            <p className="container text-center">
              Tea, Camellia sinensis, is a tree or small shrub in the family
              Theaceae grown for its leaves which are used to make beverages.
              The tea plant is branching with alternate elliptical leaves. The
              leaves are leathery in texture, matte green in color and have
              serrated edges. The tea plant can take the form of a tree with a
              bowl-shaped canopy but is usually pruned under cultivation to be
              smaller and shrub-like. The plant produces fragrant white flower
              singly or in small clusters. Tea tree can reach up to 15 m (49 ft)
              in height and can live anywhere between 30 and 50 years. The plant
              originates from China.
            </p>

            <div className="blog-contents mt-5">
              <div className="row mb-3">
                <div className="col-lg-6 col-md-12 mb-3 mb-sm-2 d-flex justify-content-center">
                <Cards
                  width={"80%"}
                  height={"auto"}
                  image={
                    "https://plantvillage-production-new.s3.amazonaws.com/blogpost/356/main_image/medium-774091f8a1b86b0de6060d8bed4d101d.png"
                  }
                  name={
                    "How the PlantVillage app helped a farmer in Konni, Niger, protect his sorghum crop"
                  }
                  title={
                    "In Konni, Niger, many farmers face ongoing problems with pests that threaten their crops. One of them, Mr. Issaka SALOUHOU, from the Birni N'Konni department, in the Tahoua region near Dagarka, was able to overcome his challenges thanks to the PlantVillage app. The app provided him with timely support when his sorghum field was attacked by fall armyworms."
                  }
                />
                </div>
                
                
                <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                <Cards
                  width={"80%"}
                  height={"auto"}
                  image={
                    "https://plantvillage-production-new.s3.amazonaws.com/blogpost/355/main_image/medium-05a3b49a5a349ca6598d3c10e68ef844.jpg"
                  }
                  name={
                    "Elina Sultan's Remarkable Journey: Empowering Women through Cassava Value Addition"
                  }
                  title={
                    "Women in Kenya play a pivotal role in the agricultural sector, making up an estimated eighty percent of the agricultural labor force. Their contribution is not only foundational to household food security but also essential for national economic growth. One such inspiring woman is Lead Farmer Elina Sultan, a cassava farmer from Matsangoni, Kilifi County, who like many others empowered by PlantVillage, has transformed her agribusiness through dedication and innovation. Her efforts have significantly impacted both her community and the agricultural landscape in Kenya."
                  }
                />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-3 mb-sm-2 d-flex justify-content-center">
                <Cards
                  width={"80%"}
                  height={"auto"}
                  image={
                    "https://plantvillage-production-new.s3.amazonaws.com/blogpost/351/main_image/medium-9626ce47f2e3b8dc0a3e80732f3f7e9e.png"
                  }
                  name={
                    "PlantVillage’s Impact: Empowering Farmers with Soil Bunds and Biochar Fertilizer"
                  }
                  title={
                    "In the drylands of Baringo County,Marigat Kenya, two resilient women farmers, Stella Lekakimon and Jane Lewatachum, are reshaping their lives and their communities through innovative soil bund construction and sustainable farming practices. With the support of PlantVillage, they have built soil bunds, a semi-circular structure, to combat erosion and improve water retention, and have planted Cenchrus ciliaris grass, a drought-tolerant species, using biochar fertilizer to enhance soil fertility. Their dedication to these methods is not only securing their families’ futures but also inspiring others in their community."
                  }
                />
                </div>
                
                
                <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                <Cards
                  width={"80%"}
                  height={"auto"}
                  image={
                    "https://plantvillage-production-new.s3.amazonaws.com/blogpost/347/main_image/medium-46a86e0f2e73033ed365008227459556.jpg"
                  }
                  name={
                    "Improving Agriculture with the PlantVillage Plus IPM Bundle: The Success Story of Farmer Francisca Mwili"
                  }
                  title={
                    "In Machakos, Tala, Kayata region, known for its dryland and challenging farming conditions, farmer Francisca Mwili, a subsistence farmer, has improved crop yield quality and quantity, and ensured sustainable agricultural practices. Thanks to the PlantVillage Plus Integrated Pest Management (IPM) bundle consisting of hybrid seeds, hermetic storage bags, parasitoids, and biochar fertilizer, she has achieved remarkable success with her maize harvest."
                  }
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
