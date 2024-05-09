document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const selectedDiseases = params.getAll('disease');
    const diseaseHeading = document.getElementById('diseaseHeading');

    if (selectedDiseases.length > 0) {
        diseaseHeading.textContent = "YOGAS FOR YOU: " + selectedDiseases.join(', ');
        const videoContainer = document.getElementById('videoContainer');

        const uniqueVideos = new Set(); // Set to store unique video URLs

        selectedDiseases.forEach(disease => {
            const videoList = getVideoListForDisease(disease);
            videoList.forEach(videoData => {
                const { videoLink, imageLink, description } = videoData;
                if (!uniqueVideos.has(videoLink)) { // Check if video is unique
                    const containerDiv = document.createElement('div');
                    containerDiv.classList.add('video-container');

                    const videoDiv = document.createElement('div');
                    videoDiv.classList.add('video');
                    const iframeElement = document.createElement('iframe');
                    iframeElement.src = videoLink;
                    iframeElement.allowFullscreen = true;
                    videoDiv.appendChild(iframeElement);

                    const descriptionDiv = document.createElement('div');
                    descriptionDiv.classList.add('description');
                    const imageElement = document.createElement('img');
                    imageElement.src = imageLink;
                    descriptionDiv.appendChild(imageElement);
                    const descriptionPara = document.createElement('p');
                    descriptionPara.textContent = description;
                    descriptionDiv.appendChild(descriptionPara);

                    containerDiv.appendChild(videoDiv);
                    containerDiv.appendChild(descriptionDiv);

                    videoContainer.appendChild(containerDiv);
                    uniqueVideos.add(videoLink); // Add video URL to set
                }
            });
        });
    } else {
        diseaseHeading.textContent = "NO DISEASE SELECTED";
    }

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.location.href = 'select.html';
    });

    function getVideoListForDisease(disease) {
        const videoMap = {

            
            "Back Pain": [
                {
                    videoLink: "https://www.youtube.com/embed/IFKJasb2taE",
                    imageLink: "",
                    description: "SHALABHASAN "
                },
                {
                    videoLink: "https://www.youtube.com/embed/W4rTLSu3Qo0",
                   imageLink:      "",             
                    description: "Ardha matyasendrasan."
                },
                {
                    videoLink: "https://www.youtube.com/embed/fOdrW7nf9gw?si=-sM6ZvILZp2qVuH9",
                    imageLink: "",
                    description: "bhujangasan"
                }
            ],
        
         
            "Arthritis": [
                {
                    videoLink: "https://www.youtube.com/embed/kkGY3xBnaGc",
                    imageLink: "",
                    description: "veerbhadarasan"
                },
                {
                    videoLink: "https://www.youtube.com/embed/aoB5L6AxckU",
                    imageLink: "",
                    description: "Utthita parsvakonasana(Extended Side Angle Pose) "
                },
                {
                    videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                    imageLink: "",
                    description: "vrikshansan  (tree pose)"
                
                }
            ],
          
          
            "Anxiety": [
                {
                    videoLink: "https://www.youtube.com/embed/a4thkiW2uPA",
                    imageLink: "",
                    description: "Yiprit karani."
                },
                {
                    videoLink: "https://www.youtube.com/embed/1VYlOKUdylM",
                    imageLink: "",
                    description: "savasan."
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "",
                    description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
                }
            ],
            
          
           "Stress": [
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink:"https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Insomnia": [
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Digestive Issues": [
            {
                videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                imageLink: "",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                imageLink: "",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Hypertension": [
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Depression": [
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Chronic Fatigue Syndrome": [
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
        "Migraines": [
            {
                videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                imageLink: "sample_arthritis_image.jpg",
                description: "Yoga poses for arthritis help to increase joint mobility and reduce stiffness."
            },
            {
                videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                imageLink: "",
                description: "Gentle stretching exercises to relieve arthritis symptoms and improve flexibility."
            },
            {
                videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                imageLink: "sample_arthritis_image3.jpg",
                description: "Chair yoga for arthritis suitable for those with limited mobility or joint pain."
            }
        ],

        
          
          
          
          
          
          
          
          
          
          
            // Add all other diseases with their respective videos, images, and descriptions here
        };

        return videoMap[disease] || [];
    }
});