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
                const { videoLink, imageLink, headings, subheadings, descriptions } = videoData;
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

                    for (let i = 0; i < headings.length; i++) {
                        const headingElem = document.createElement('h2');
                        headingElem.textContent = headings[i];
                        descriptionDiv.appendChild(headingElem);
                        const subheadingElem = document.createElement('h3');
                        subheadingElem.textContent = subheadings[i];
                        descriptionDiv.appendChild(subheadingElem);
                        const descriptionPara = document.createElement('p');
                        descriptionPara.textContent = descriptions[i];
                        descriptionDiv.appendChild(descriptionPara);
                    }

                    const imageElement = document.createElement('img');
                    imageElement.src = imageLink;
                    descriptionDiv.appendChild(imageElement);

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
                    headings: ["Yoga for Back Pain",""],
                    subheadings: ["Shalabhasan  "],
                    descriptions: [
                        "Shalabhasan is a yoga pose that helps strengthen the back muscles and alleviate back pain. Lie on your stomach, lift your legs and chest off the ground, and hold for a few breaths. Repeat several times."
                    ]
                },


                {
                    videoLink: "https://www.youtube.com/embed/W4rTLSu3Qo0",
                    imageLink: "",
                    headings: ["Yoga for Back Pain"],
                    subheadings: ["Ardha Matyasendrasan"],
                    descriptions: [
                        "Ardha Matyasendrasan is a seated yoga pose that helps relieve tension in the spine and back muscles. Sit with one leg extended and the other leg bent, twist your torso towards the bent knee, and hold the pose for a few breaths. Repeat on the other side."
                    ]
                },


                {
                    videoLink: "https://www.youtube.com/embed/fOdrW7nf9gw?si=-sM6ZvILZp2qVuH9",
                    imageLink: "",
                    headings: ["Yoga for Back Pain"],
                    subheadings: ["Bhujangasan"],
                    descriptions: [
                        "Bhujangasan, also known as the Cobra Pose, is beneficial for relieving back pain and strengthening the spine. Lie on your stomach, place your hands under your shoulders, and lift your chest off the ground while keeping your pelvis and legs grounded."
                    ]
                }, 
                

                {
                    videoLink: "",
                    imageLink: "",
                    headings: ["Yoga for Back Pain"],
                    subheadings: ["Balasana)"],
                    descriptions: [
                        "Ardha Matyasendrasan is a seated yoga pose that helps relieve tension in the spine and back muscles. Sit with one leg extended and the other leg bent, twist your torso towards the bent knee, and hold the pose for a few breaths. Repeat on the other side."
                    ]
                },
                
                
                {
                    videoLink: "Uttanasan",
                    imageLink: "",
                    headings: ["Yoga for Back Pain"],
                    subheadings: ["Uttanasana"],
                    descriptions: [
                        "This yoga pose for lower back pain may seem exceptionally basic but it can bring profound relief. It stretches your entire back body, from your calves to your neck—including, of course, your lower back.."
                    ]
                },




                {
                    videoLink: "Malasana",
                    imageLink: "",
                    headings: ["Yoga for Back Pain"],
                    subheadings: ["Malasana"],
                    descriptions: [
                        "This yoga pose for lower back pain may seem exceptionally basic but it can bring profound relief. It stretches your entire back body, from your calves to your neck—including, of course, your lower back.."
                    ]
                },
              
            ],






            "Arthritis": [
                {
                    videoLink: "https://www.youtube.com/embed/kkGY3xBnaGc",
                    imageLink: "",
                    headings: ["Yoga for Arthritis"],
                    subheadings: ["Veerbhadrasan"],
                    descriptions: [
                        "Veerbhadrasan, also known as the Warrior Pose, is beneficial for arthritis patients as it helps improve joint mobility and flexibility. Stand with legs wide apart, bend one knee, and stretch the arms upward."
                    ]
                },




                {
                    videoLink: "https://www.youtube.com/embed/aoB5L6AxckU",
                    imageLink: "",
                    headings: ["Yoga for Arthritis"],
                    subheadings: ["Utthita Parsvakonasana"],
                    descriptions: [
                        "Utthita Parsvakonasana, or Extended Side Angle Pose, is a yoga pose that helps strengthen the legs, improve balance, and increase flexibility in the hips. Stand with legs wide apart, bend one knee, and lower your body to the side while extending the opposite arm overhead."
                    ]
                },



                {
                    videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                    imageLink: "",
                    headings: ["Yoga for Arthritis"],
                    subheadings: ["Vrikshansan"],
                    descriptions: [
                        "Vrikshansan, also known as the Tree Pose, helps improve balance and concentration while strengthening the legs and ankles. Stand tall, shift your weight to one foot, and place the sole of the other foot on the inner thigh or calf of the standing leg."
                    ]
                }

            ],

            // Add all other diseases with their respective videos, images, headings, subheadings, and descriptions here
   
   
   
            "Anxiety": [
                {
                    videoLink: "https://www.youtube.com/embed/a4thkiW2uPA",
                    imageLink: "",
                    headings: ["Yoga for Anxiety"],
                    subheadings: ["Yiprit Karani"],
                    descriptions: [
                        "Yiprit Karani, also known as Legs-Up-The-Wall Pose, is a restorative yoga pose that helps calm the mind and relieve anxiety. Lie on your back with your legs up against a wall, and relax your body for a few minutes."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/1VYlOKUdylM",
                    imageLink: "",
                    headings: ["Yoga for Anxiety"],
                    subheadings: ["Savasana"],
                    descriptions: [
                        "Savasana, also known as Corpse Pose, is a relaxation yoga pose that helps reduce stress and anxiety by allowing the body and mind to rest deeply. Lie flat on your back, close your eyes, and relax all your muscles while focusing on your breath."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "",
                    headings: ["Chair Yoga for Anxiety"],
                    subheadings: ["Gentle Chair Yoga"],
                    descriptions: [
                        "Gentle chair yoga exercises are suitable for those with limited mobility or joint pain. This session focuses on gentle movements and breathing exercises to help reduce anxiety and promote relaxation."
                    ]
                }
            ],









            "Stress":[

                {
                    videoLink:  "",
                    imageLink: "sample_stress_image.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["Joint Mobility"],
                    descriptions: [
                        "Yoga poses for stress relief help to relax the body and calm the mind. Practice gentle joint mobility exercises to release tension and improve flexibility."
                    ]
                },



                {
                    videoLink: "  ",
                    imageLink: "",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["Breathing Techniques"],
                    descriptions: [
                        "Deep breathing exercises are effective for reducing stress and promoting relaxation. Practice pranayama techniques to calm the nervous system and increase mindfulness."
                    ]
                },
                {
                    videoLink: "   ",
                    imageLink: "sample_stress_image3.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation helps to cultivate awareness and presence in the moment, reducing stress and promoting emotional well-being. Practice mindfulness techniques to develop inner peace and resilience."
                    ]
                },

                {
                    videoLink: "    ",
                    imageLink: "sample_stress_image.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["   Anusara Yoga"],
                    descriptions: [
                        ".           "
                    ]
                },

                {
                    videoLink: "     ",
                    imageLink: "sample_stress_image.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["   Ashtanga Yoga"],
                    descriptions: [
                        "Y         ."
                    ]
                },
                {
                    videoLink: "       ",
                    imageLink: "sample_stress_image.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["  Bhakti Yoga"],
                    descriptions: [
                        "           ."
                    ]
                },{
                    videoLink: "         ",
                    imageLink: "sample_stress_image.jpg",
                    headings: ["Yoga for Stress Relief"],
                    subheadings: ["  Chair Yoga"],
                    descriptions: [
                        ""
                    ]
                },

            ],












            // Add more diseases with their respective videos, images, headings, subheadings, and descriptions here
            "Insomnia": [
                {
                    videoLink: "Relaxing Poses",
                    imageLink: "sample_insomnia_image.jpg",
                    headings: ["Yoga for Insomnia"],
                    subheadings: ["Relaxing Poses"],
                    descriptions: [
                        "Yoga poses for insomnia help to calm the mind and relax the body, promoting better sleep. Practice gentle and relaxing poses before bedtime to prepare for a restful night's sleep."
                    ]
                },
                {
                    videoLink: "Breathing Exercises",
                    imageLink: "",
                    headings: ["Yoga for Insomnia"],
                    subheadings: ["Breathing Exercises"],
                    descriptions: [
                        "Deep breathing exercises are effective for reducing stress and anxiety, helping to improve sleep quality. Practice pranayama techniques to calm the mind and prepare for sleep."
                    ]
                },
                {
                    videoLink: "Guided Meditation",
                    imageLink: "sample_insomnia_image3.jpg",
                    headings: ["Yoga for Insomnia"],
                    subheadings: ["Guided Meditation"],
                    descriptions: [
                        "Guided meditation for insomnia helps to relax the body and quiet the mind, facilitating deep and restorative sleep. Practice guided meditation techniques to ease into a peaceful state of relaxation."
                    ]
                }
            ],









            "Digestive Issues": [
                {
                    videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                    imageLink: "sample_digestive_image.jpg",
                    headings: ["Yoga for Digestive Health"],
                    subheadings: ["Stomach Massage"],
                    descriptions: [
                        "Yoga poses for digestive health help to stimulate digestion and relieve discomfort. Practice gentle stomach massage techniques to improve circulation and alleviate digestive issues."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                    imageLink: "",
                    headings: ["Yoga for Digestive Health"],
                    subheadings: ["Twisting Poses"],
                    descriptions: [
                        "Twisting yoga poses are beneficial for promoting digestion and detoxification. Practice gentle twists to massage the abdominal organs and improve digestive function."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/Dic293YNJI8?si=dFiARtBMoOfVGrgv",
                    imageLink: "sample_digestive_image3.jpg",
                    headings: ["Yoga for Digestive Health"],
                    subheadings: ["Deep Breathing"],
                    descriptions: [
                        "Deep breathing exercises help to relax the nervous system and promote healthy digestion. Practice diaphragmatic breathing to reduce stress and enhance gastrointestinal function."
                    ]
                }
            ],










            "Hypertension": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_hypertension_image.jpg",
                    headings: ["Yoga for Hypertension"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to reduce stress and lower blood pressure, promoting cardiovascular health. Practice deep breathing and meditation to calm the mind and body."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Hypertension"],
                    subheadings: ["Gentle Exercises"],
                    descriptions: [
                        "Gentle yoga exercises are beneficial for hypertension patients as they help to improve circulation and relax the body. Practice slow and controlled movements to reduce stress and tension."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_hypertension_image3.jpg",
                    headings: ["Yoga for Hypertension"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for hypertension focuses on cultivating awareness and relaxation, promoting overall well-being. Practice mindfulness techniques to manage stress and support heart health."
                    ]
                }
            ],









            // Add more diseases with their respective videos, images, headings, subheadings, and descriptions here
            "Depression": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_depression_image.jpg",
                    headings: ["Yoga for Depression"],
                    subheadings: ["Energizing Poses"],
                    descriptions: [
                        "Yoga poses for depression help to uplift mood and increase energy levels, promoting emotional well-being. Practice energizing poses to release tension and boost vitality."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Depression"],
                    subheadings: ["Mindful Breathing"],
                    descriptions: [
                        "Mindful breathing exercises are effective for managing depression and reducing anxiety. Practice deep breathing techniques to calm the mind and cultivate inner peace."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_depression_image3.jpg",
                    headings: ["Yoga for Depression"],
                    subheadings: ["Guided Relaxation"],
                    descriptions: [
                        "Guided relaxation for depression helps to alleviate stress and promote relaxation, fostering a sense of calm and tranquility. Practice guided relaxation techniques to ease mental tension and uplift mood."
                    ]
                }
            ],










            "Chronic Fatigue Syndrome": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_fatigue_image.jpg",
                    headings: ["Yoga for Chronic Fatigue Syndrome"],
                    subheadings: ["Gentle Stretching"],
                    descriptions: [
                        "Yoga for chronic fatigue syndrome focuses on gentle stretching and relaxation to reduce symptoms and improve energy levels. Practice slow and mindful movements to alleviate fatigue and restore vitality."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Chronic Fatigue Syndrome"],
                    subheadings: ["Restorative Poses"],
                    descriptions: [
                        "Restorative yoga poses are beneficial for chronic fatigue syndrome as they help to replenish energy and promote deep relaxation. Practice supported poses to release tension and enhance well-being."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_fatigue_image3.jpg",
                    headings: ["Yoga for Chronic Fatigue Syndrome"],
                    subheadings: ["Meditation"],
                    descriptions: [
                        "Meditation for chronic fatigue syndrome helps to calm the mind and restore balance, reducing stress and enhancing resilience. Practice mindfulness techniques to improve mental clarity and promote healing."
                    ]
                }
            ],










            "Migraines": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],




            
            "Fibromyalgia": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],




            
            "Multiple Sclerosis (MS)": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],



              
            "Cancer": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],




            "Post-Traumatic Stress Disorder (PTSD)": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],






            "Obesity": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],






            "Blood Pressure": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],






            "Diabetes": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],





            "Joint Pain": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],









            "Spinal Disorder": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ],








            "Asthma": [
                {
                    videoLink: "https://www.youtube.com/embed/t2_Q2BRzeEE",
                    imageLink: "sample_migraine_image.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Relaxation Techniques"],
                    descriptions: [
                        "Yoga relaxation techniques help to alleviate migraines by reducing stress and promoting relaxation. Practice deep breathing and guided relaxation to ease tension and soothe headaches."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/JDf6YBWrnfs",
                    imageLink: "",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Neck Stretches"],
                    descriptions: [
                        "Neck stretches for migraines help to release tension in the neck and shoulders, alleviating headache symptoms. Practice gentle stretches and self-massage to relieve pain and improve flexibility."
                    ]
                },
                {
                    videoLink: "https://www.youtube.com/embed/-hSj-Y9x9_w",
                    imageLink: "sample_migraine_image3.jpg",
                    headings: ["Yoga for Migraines"],
                    subheadings: ["Mindfulness Meditation"],
                    descriptions: [
                        "Mindfulness meditation for migraines focuses on cultivating awareness and relaxation, reducing the frequency and intensity of headaches. Practice mindfulness techniques to manage pain and enhance well-being."
                    ]
                }
            ]





























        };

        return videoMap[disease] || [];
    }
});
