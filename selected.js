document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const selectedDiseases = params.getAll('disease');
    const diseaseHeading = document.getElementById('diseaseHeading');

    if (selectedDiseases.length > 0) {
        diseaseHeading.textContent = "YOGAS FOR: " + selectedDiseases.join(', ');
        const videoContainer = document.getElementById('videoContainer');

        const uniqueVideos = new Set(); // Set to store unique video URLs

        selectedDiseases.forEach(disease => {
            const videoList = getVideoListForDisease(disease);
            videoList.forEach(videoData => {
                const { videoLink, imageLink, poses } = videoData;
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

                    poses.forEach(poseData => {
                        const { pose, ageGroups, benefits, yogaFor } = poseData;

                        const headingElem = document.createElement('h2');
                        headingElem.textContent = pose;
                        descriptionDiv.appendChild(headingElem);

                        const ageGroupElem = document.createElement('h3');
                        ageGroupElem.textContent = "Age groups: " + ageGroups;
                        descriptionDiv.appendChild(ageGroupElem);

                        const benefitsPara = document.createElement('p');
                        benefitsPara.textContent = "Benefits: " + benefits;
                        descriptionDiv.appendChild(benefitsPara);

                        const yogaForPara = document.createElement('p');
                        yogaForPara.textContent = "Yoga for: " + yogaFor;
                        descriptionDiv.appendChild(yogaForPara);
                    });

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
        diseaseHeading.textContent = "NO SELECTION";
    }

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.location.href = 'select.html';
    });

    function getVideoListForDisease(disease) {
        const videoMap = {

               //     ------------------------1-back bain-------------------------------------------------"   

               "Back Pain": [


                {
               "videoLink":"https://drive.google.com/file/d/1O_lPKkJBQRMsVP6Dz_ubp0FgpSwqSlsC/preview" ,
               "imageLink": "",
               "poses": [
                   {
                       "pose": "Shalabhasan",
                       "ageGroups": "",
                       "benefits": "Shalabhasan is a yoga pose that helps strengthen the back muscles and alleviate back pain. Lie on your stomach, lift your legs and chest off the ground, and hold for a few breaths. Repeat several times.",
                       "yogaFor": "Back Pain"
                   },
                   // Add more poses here
               ]
              },
           
     
               {
                   "videoLink": "https://drive.google.com/file/d/1Na8qityMhYnC-_4ksYpCb4yZXg78ahRE/preview",
                   "imageLink": "",
                   "poses": [
                       {   
                           "pose": "Cobra Pose (Bhujangasana)",
                           "ageGroups": "Adults and Seniors",
                           "benefits": "Strengthens the back muscles, improves flexibility in the spine, and alleviates stiffness and discomfort in the lower back. Stimulates circulation to the spinal muscles and nerves. Can help relieve sciatica pain.",
                           "yogaFor": "Back Pain"
                       }
                   ]
               },

               {
                   "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                   "imageLink": "",
                   "poses": [
                       {
                           "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                           "ageGroups": "Children, Adults, and Seniors",
                           "benefits": "Promotes flexibility and mobility in the spine through gentle movement. Helps stretch and lengthen the muscles of the back. Improves posture and enhances circulation to the spinal discs. Provides relief from tension and stiffness in the back and neck.",
                           "yogaFor": "Back Pain"
                       }
                   ]
               },

               {
                   "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview" ,
                   "imageLink": "",
                   "poses": [
                       {
                           "pose": "Child's Pose (Balasana)",
                           "ageGroups": "Children, Adults, and Seniors",
                           "benefits": "Relaxes the muscles of the lower back and hips. Stretches the spine, shoulders, and arms, releasing tension in these areas. Calms the mind and relieves stress and anxiety. Encourages deep breathing and promotes restful sleep.",
                           "yogaFor": "Back Pain"
                       }
                   ]
               },

               {
                   "videoLink": "https://drive.google.com/file/d/1zYOjwfKJBgTnMk7GIZ6JPU9s0gMfykdq/preview",
                   "imageLink": "",
                   "poses": [
                       {
                           "pose": "Downward-Facing Dog Pose (Adho Mukha Svanasana)",
                           "ageGroups": "Adults and Seniors",
                           "benefits": "Lengthens and decompresses the spine, relieving tension and compression. Strengthens the muscles of the back and stretches the hamstrings, calves, and shoulders. Promotes blood circulation to the brain and can help relieve headaches and migraines.",
                           "yogaFor": "Back Pain"
                       }
                   ]
               },

               {
                   "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                   "imageLink": "",
                   "poses": [
                       {
                           "pose": "Bridge Pose (Setu Bandhasana)",
                           "ageGroups": "Adults and Seniors",
                           "benefits": "Strengthens the muscles of the back and stretches the chest, neck, and spine. Relieves pressure on the lower back and hips, reducing discomfort. Improves circulation to the spine and promotes spinal health and flexibility.",
                           "yogaFor": "Back Pain"
                       }
                   ]
               },

               {
                   "videoLink": "https://drive.google.com/file/d/173MCBzW26K8lzRTvP6baBQrU4zfQPKpO/preview",
                   "imageLink": "",
                   "poses": [
                       {
                           "pose": "Pigeon Pose (Eka Pada Rajakapotasana)",
                           "ageGroups": "Adults and Seniors",
                           "benefits": "Stretches the hip flexors, piriformis, and gluteus muscles, relieving tension in the hips and lower back. Increases flexibility and mobility in the hip joints. Can help alleviate sciatica pain and improve sciatic nerve function.",
                           "yogaFor": "Back Pain"
                       }// Add more poses here
                   ]
                } ,
       
              // Add more videos here

            ],
             // Add more diseases here

                 //  -------------------2--  "Arthritis":-----------------------------------------------------"



                    "Arthritis": [
                        {
                            "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                    "ageGroups": "Children, Adults, and Seniors",
                                    "benefits": "Promotes flexibility and mobility in the spine through gentle movement. Helps stretch and lengthen the muscles of the back. Improves posture and enhances circulation to the spinal discs. Provides relief from tension and stiffness in the back and neck.",
                                    "yogaFor": " arthritis"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Child's Pose (Balasana)",
                                    "ageGroups": "Children, Adults, and Seniors",
                                    "benefits": "Relaxes the muscles of the lower back and hips. Stretches the spine, shoulders, and arms, releasing tension in these areas. Calms the mind and relieves stress and anxiety. Encourages deep breathing and promotes restful sleep.",
                                    "yogaFor": " arthritis"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1bPdA-vTwl9sBHvI8pasUBwxow2f1SFwL/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Seated Forward Bend (Paschimottanasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Stretches the spine, hamstrings, and lower back muscles, improving flexibility. Relieves stiffness and discomfort in the back and hips. Stimulates the abdominal organs, aiding digestion and relieving digestive issues associated with arthritis. Promotes relaxation and reduces stress.",
                                    "yogaFor": "arthritis"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1O8iQcfqgOacbbmAnXUJgxBSVL4ycx-S1/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Supine Spinal Twist (Supta Matsyendrasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Relieves tension and stiffness in the spine and lower back. Stretches and strengthens the muscles along the spine and core. Improves spinal mobility and flexibility, reducing discomfort associated with arthritis. Stimulates circulation to the spinal nerves, promoting nerve health and function.",
                                    "yogaFor": " arthritis"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1w7-Ry59H9hqkjScqI-sMWuJoYVTfYfOj/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Warrior Poses (Virabhadrasana I and II)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Strengthens the legs, hips, and core muscles, improving stability and balance. Stretches the chest, shoulders, and arms, relieving tension and stiffness. Increases circulation to the joints, promoting joint health and mobility. Builds confidence and resilience, supporting mental well-being in individuals with arthritis.",
                                    "yogaFor": " arthritis"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1MrZDE-2sSuST_5H1budr5gdEd7CR1ti7/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Tree Pose (Vrksasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Improves balance and proprioception, reducing the risk of falls. Strengthens the muscles of the legs, ankles, and feet, supporting joint stability. Enhances concentration and focus, calming the mind and reducing stress. Promotes a sense of grounding and stability, which can be beneficial for individuals with arthritis.",
                                    "yogaFor": " arthritis"
                                }
                            ]
                        } // Add more videos here
                    ],         // Add more diseases here
                
                
                   







                         // ---------------------------3 "Anxiety and Stress----------------------------------------------"


                        "Anxiety and Stress": [
                            {
                                "videoLink":"https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                                "imageLink": " ",
                                "poses": [
                                    {
                                        "pose": "Corpse Pose (Savasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Promotes deep relaxation and stress relief by allowing the body to completely rest and rejuvenate. Calms the mind and reduces anxiety levels. Helps improve concentration and mental clarity.",
                                        "yogaFor": " Anxiety and Stress, Insomnia, Hypertension, Depression, Chronic Fatigue Syndrome, PTSD, Obesity, Blood Pressure"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Child's Pose (Balasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Provides a gentle stretch to the back, hips, and thighs, releasing tension and stress. Encourages deep breathing and relaxation, promoting a sense of calmness and peace of mind. Relieves fatigue and soothes the nervous system.",
                                        "yogaFor": " anxiety and stress"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Helps release tension from the spine and improve spinal flexibility. Stimulates the flow of energy throughout the body, reducing stress and anxiety. Promotes relaxation and mental focus through synchronized movement with breath.",
                                        "yogaFor": " anxiety and stress"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1zYOjwfKJBgTnMk7GIZ6JPU9s0gMfykdq/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Downward-Facing Dog Pose (Adho Mukha Svanasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Stretches the entire body, relieving tension and promoting relaxation. Increases blood circulation to the brain, calming the mind and reducing anxiety. Strengthens the arms, shoulders, and legs, promoting overall physical well-being.",
                                        "yogaFor": " anxiety and stress"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Stretches the chest, neck, and spine, alleviating stress and anxiety. Stimulates the thyroid gland, regulating metabolism and energy levels. Calms the brain and central nervous system, promoting relaxation and mental clarity.",
                                        "yogaFor": "anxiety and stress"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1PM1uzLZTwZSJhLOqBcio6CcOVfiVcC7L/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Standing Forward Bend (Uttanasana)",
                                        "ageGroups": "All age groups",
                                        "benefits": "Relieves tension from the spine, shoulders, and hamstrings, promoting relaxation. Calms the mind and reduces stress and anxiety. Stimulates blood circulation to the brain, improving mental focus and clarity.",
                                        "yogaFor": " anxiety and stress"
                                    }
                                ]
                           
                        
                
                    } // Add more videos here
                ],         // Add more diseases here
        




                        // " ----------------------------4- "Insomnia":---------------------------------------------"




                "Insomnia": [   
                        {
                            "videoLink": "https://drive.google.com/file/d/1DZIa9fasQ2g0CX77ciG9qxz9lH3cRJX0/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Legs-Up-The-Wall Pose (Viparita Karani)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Promotes relaxation and reduces stress and anxiety. Calms the nervous system and soothes the mind, preparing the body for sleep. Improves blood circulation and relieves swelling in the legs and feet. Recommended for individuals experiencing insomnia and sleep disturbances.",
                                    "yogaFor": " insomnia"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1EfkgIHTodXjJHtFuLDFmj446drYOK1pb/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Reclining Bound Angle Pose (Supta Baddha Konasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Opens the chest and hips, releasing tension and promoting relaxation. Stimulates the parasympathetic nervous system, inducing a state of calmness and tranquility. Relieves symptoms of anxiety and stress, helping to improve sleep quality. Recommended for individuals with insomnia and sleep disorders.",
                                    "yogaFor": " insomnia"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1bPdA-vTwl9sBHvI8pasUBwxow2f1SFwL/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Seated Forward Bend (Paschimottanasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Stretches the spine, hamstrings, and lower back muscles, relieving tension and stiffness. Calms the mind and reduces stress and anxiety levels, promoting relaxation. Stimulates the nervous system and prepares the body for restful sleep. Recommended for individuals struggling with insomnia and sleep disturbances.",
                                    "yogaFor": " insomnia"
                                }
                            ]
                        },
                        {
                            "videoLink":"https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Corpse Pose (Savasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Induces deep relaxation and calms the nervous system, promoting sleepiness. Relieves physical and mental tension, allowing the body to unwind and prepare for sleep. Reduces anxiety and stress levels, facilitating a peaceful transition into sleep. Recommended as a relaxation technique for individuals with insomnia.",
                                    "yogaFor": "insomnia,Anxiety and Stress,Hypertension, Depression, Chronic Fatigue Syndrome, PTSD, Obesity, Blood Pressure"
                                }
                            ]
                        }
                       ],





           // " --------------------5--"Digestive Issues":---------------------------------------------------"




                "Digestive Issues": [


                    
                            {
                                "videoLink": "https://drive.google.com/file/d/1bPdA-vTwl9sBHvI8pasUBwxow2f1SFwL/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Seated Forward Bend (Paschimottanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the spine and stimulates the digestive organs, promoting healthy digestion. Relieves constipation and improves bowel movements. Reduces bloating and gas by releasing trapped air in the abdomen. Recommended for individuals experiencing digestive issues such as indigestion and bloating.",
                                        "yogaFor": "digestive issues"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Improves spinal flexibility and massages the digestive organs, promoting digestion. Stimulates the flow of bile and digestive juices, aiding in the breakdown of food. Relieves tension in the abdomen and reduces discomfort associated with digestive issues. Recommended for individuals with digestive problems such as acidity and indigestion.",
                                        "yogaFor": " digestive issues"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/19fPh8SfaMGUwJdAgSY6FR9H7yvpDaaOS/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Wind-Relieving Pose (Pavanamuktasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Helps relieve gas and bloating by compressing the abdomen and releasing trapped air. Stimulates peristalsis, aiding in the movement of food through the digestive tract. Improves digestion and alleviates symptoms of indigestion and flatulence. Recommended for individuals experiencing digestive discomfort and bloating.",
                                        "yogaFor": " digestive issues"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Na8qityMhYnC-_4ksYpCb4yZXg78ahRE/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cobra Pose (Bhujangasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Strengthens the abdominal muscles and improves digestion by stimulating the digestive organs. Enhances blood circulation to the digestive tract, promoting optimal functioning. Relieves constipation and aids in the elimination of waste from the body. Recommended for individuals with digestive issues such as sluggish digestion and constipation.",
                                        "yogaFor": " digestive issues"
                                    }
                                ]
                            }
                       ],


           // " -------------------6-----"Hypertension":--------------------------------------------------"


                       "Hypertension": [
    
                        {
                            "videoLink": "https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Corpse Pose (Savasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Promotes relaxation and reduces stress, which can help lower blood pressure levels. Allows the body to rest and recover, reducing the workload on the heart. Improves circulation and helps regulate blood pressure. Recommended for individuals with hypertension or high blood pressure.",
                                    "yogaFor": " hypertension ,Anxiety and Stress, Insomnia, Depression, Chronic Fatigue Syndrome, PTSD, Obesity, Blood Pressure"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1DZIa9fasQ2g0CX77ciG9qxz9lH3cRJX0/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Legs-Up-The-Wall Pose (Viparita Karani)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Promotes relaxation and reduces stress, helping to lower blood pressure levels. Improves circulation and relieves pressure on the heart. Calms the nervous system and induces a state of deep relaxation. Recommended for individuals with hypertension or high blood pressure.",
                                    "yogaFor": " hypertension"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                            "imageLink": " ",
                            "poses": [     
                                {
                                    "pose": "Child's Pose (Balasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Promotes relaxation and reduces stress, which can help lower blood pressure levels. Stretches the spine and relieves tension in the back and shoulders. Calms the mind and induces a sense of peace and tranquility. Recommended for individuals with hypertension or high blood pressure.",
                                    "yogaFor": "hypertension"
                                }
                            ]
                        },
                        {
                            "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                            "imageLink": "",
                            "poses": [
                                {
                                    "pose": "Bridge Pose (Setu Bandhasana)",
                                    "ageGroups": "Adults and Seniors",
                                    "benefits": "Stretches the chest and improves lung function, aiding in better oxygenation of the blood. Relieves stress and fatigue, helping to lower blood pressure levels. Strengthens the back and abdominal muscles, supporting overall cardiovascular health. Recommended for individuals with hypertension or high blood pressure.",
                                    "yogaFor": " hypertension"
                                }
                            ]
                        }
                       ],

 
           // " ---------------------7-- "Depression":---------------------------------------------------"



                "Depression": [

                   
                            {
                                "videoLink": "https://drive.google.com/file/d/1Q91o8GajG5w6g0QyV_N1uKDdiH_gQMCP/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Sun Salutations (Surya Namaskar)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Sun Salutations are a sequence of yoga poses that promote overall physical and mental well-being. They help improve circulation, release tension, and energize the body, which can uplift the mood and alleviate symptoms of depression. Sun Salutations also incorporate deep breathing, which calms the mind and reduces stress.",
                                        "yogaFor": " depression"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1w7-Ry59H9hqkjScqI-sMWuJoYVTfYfOj/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Warrior Poses (Virabhadrasana I and II)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Warrior Poses build strength and resilience while promoting mental focus and concentration. They help improve posture, balance, and confidence, which can boost self-esteem and combat feelings of depression. Warrior Poses also stretch the muscles and release tension, providing relief from physical and emotional stress.",
                                        "yogaFor": " depression"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Bridge Pose opens the heart and chest, which can alleviate feelings of sadness and depression. It stretches the spine and strengthens the back muscles, promoting better posture and emotional stability. Bridge Pose also stimulates the thyroid gland, which regulates mood and energy levels.",
                                        "yogaFor": " depression"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Corpse Pose (Savasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Corpse Pose induces deep relaxation and helps calm the mind and nervous system. It allows for complete surrender and letting go of tension and worries, promoting a sense of peace and tranquility. Corpse Pose can alleviate symptoms of anxiety and depression by reducing stress and promoting inner stillness.",
                                        "yogaFor": " depression, Anxiety and Stress, Insomnia, Hypertension, Chronic Fatigue Syndrome, PTSD, Obesity, Blood Pressure"
                                    }
                                ]
                            }
                ],



           // " -----------------------8---"Chronic Fatigue Syndrome"------------------------------------------------"


                "Chronic Fatigue Syndrome": [
                  
                            {
                                "videoLink": "https://drive.google.com/file/d/1EfkgIHTodXjJHtFuLDFmj446drYOK1pb/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Reclining Bound Angle Pose (Supta Baddha Konasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relaxes the body and mind, helps open the hips and groin area, stimulates the heart and improves circulation, relieves fatigue and stress.",
                                        "yogaFor": " Chronic Fatigue Syndrome"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1DZIa9fasQ2g0CX77ciG9qxz9lH3cRJX0/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Legs-Up-The-Wall Pose (Viparita Karani)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes relaxation, relieves tired legs and feet, improves circulation, reduces stress and anxiety, calms the nervous system.",
                                        "yogaFor": " Chronic Fatigue Syndrome"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Corpse Pose (Savasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes deep relaxation, reduces stress and anxiety, calms the mind, improves sleep quality, helps restore energy levels.",
                                        "yogaFor": "Chronic Fatigue Syndrome  Anxiety and Stress, Insomnia, Hypertension, Depression,PTSD, Obesity, Blood Pressure, Stress"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Supported Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the chest, neck, and spine, reduces fatigue and stress, calms the mind, relieves mild depression, rejuvenates the body.",
                                        "yogaFor": "Chronic Fatigue Syndrome"
                                    }
                                ]
                            }
                ],



                        // " ----------------------9----"Migraines":------------------------------------------------"


                "Migraines": [
                  
                            {
                                "videoLink": "https://drive.google.com/file/d/1PM1uzLZTwZSJhLOqBcio6CcOVfiVcC7L/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Forward Fold (Uttanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Calms the brain, relieves stress, stretches the spine and hamstrings, improves blood circulation, reduces tension in the neck and shoulders.",
                                        "yogaFor": "Migraines"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Child's Pose (Balasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relieves stress and anxiety, calms the mind, gently stretches the spine and hips, promotes relaxation, reduces headache tension.",
                                        "yogaFor": " Migraines"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1bPdA-vTwl9sBHvI8pasUBwxow2f1SFwL/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Seated Forward Bend (Paschimottanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Soothes the nervous system, reduces stress and anxiety, stretches the spine and hamstrings, relieves tension in the head and neck.",
                                        "yogaFor": " Migraines"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1EfkgIHTodXjJHtFuLDFmj446drYOK1pb/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Reclining Bound Angle Pose (Supta Baddha Konasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relaxes the body and mind, reduces stress and anxiety, improves circulation, releases tension in the hips and groin.",
                                        "yogaFor": " Migraines"
                                    }
                                ]
                            }
             
                ],


           // " --------------------10-- "Fibromyalgia"----------------------------------------------------"


                "Fibromyalgia": [

                    
                     
                            {
                                "videoLink": "https://drive.google.com/file/d/11yC_PK_KLh2RmR_oady4IXMemSmhtWqU/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Seated Spinal Twist (Ardha Matsyendrasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the spine and shoulders, improves digestion, relieves back pain and stiffness, reduces stress and anxiety.",
                                        "yogaFor": "Fibromyalgia"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Supported Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relaxes the body and mind, opens the chest and shoulders, stretches the spine and hip flexors, reduces fatigue.",
                                        "yogaFor": " Fibromyalgia"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1DZIa9fasQ2g0CX77ciG9qxz9lH3cRJX0/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Legs-Up-The-Wall Pose (Viparita Karani)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes relaxation, improves circulation, reduces swelling in the legs, relieves lower back pain and tension.",
                                        "yogaFor": " Fibromyalgia"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1EfkgIHTodXjJHtFuLDFmj446drYOK1pb/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Reclining Bound Angle Pose (Supta Baddha Konasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relaxes the body and mind, opens the hips and groin, reduces stress and fatigue, promotes deep relaxation.",
                                        "yogaFor": " Fibromyalgia"
                                    }
                                ]
                            }
                
                ],




                 // " -------------------11--- "Multiple Sclerosis (MS)":----------------------------------------------------"




                "Multiple Sclerosis (MS)": [  
        {
            "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
            "imageLink": "",
            "poses": [
                {
                    "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                    "ageGroups": "Adults and Seniors",
                    "benefits": "Promotes spinal flexibility, strengthens the spine and core muscles, improves posture, reduces back pain and stiffness.",
                    "yogaFor": " Multiple Sclerosis (MS)"
                }
            ]
        },
        {
            "videoLink": "https://drive.google.com/file/d/11yC_PK_KLh2RmR_oady4IXMemSmhtWqU/preview",
            "imageLink": "",
            "poses": [
                {
                    "pose": "Seated Spinal Twist (Ardha Matsyendrasana)",
                    "ageGroups": "Adults and Seniors",
                    "benefits": "Stretches the spine and shoulders, improves digestion, relieves back pain and stiffness, reduces stress and anxiety.",
                    "yogaFor": " Multiple Sclerosis (MS)"
                }
            ]
        },
        {
            "videoLink": "https://drive.google.com/file/d/1w7-Ry59H9hqkjScqI-sMWuJoYVTfYfOj/preview",
            "imageLink": "",
            "poses": [
                {
                    "pose": "Warrior Poses (Virabhadrasana I and II)",
                    "ageGroups": "Adults and Seniors",
                    "benefits": "Strengthens the legs, core, and arms, improves balance and stability, enhances focus and concentration.",
                    "yogaFor": " Multiple Sclerosis (MS)"
                }
            ]
        },
        {
            "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
            "imageLink": "",
            "poses": [
                {
                    "pose": "Child's Pose (Balasana)",
                    "ageGroups": "Adults and Seniors",
                    "benefits": "Relieves fatigue and stress, gently stretches the spine and hips, promotes relaxation and calmness.",
                    "yogaFor": " Multiple Sclerosis (MS)"
                }
            ]
        }
  

],




           // " ------------------------12-- "Cancer":------------------------------------------------"

                "Cancer": [ 
                            {
                                "videoLink": "https://drive.google.com/file/d/1WMsz6MF-Q-l0mS77RL8VhuFoPIa1FS5C/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Gentle Yoga Practices",
                                        "ageGroups": "All Ages",
                                        "benefits": "Promotes relaxation, reduces stress and anxiety, improves sleep quality, enhances overall well-being.",
                                        "yogaFor": " Cancer Patients"
                                    }
                                ]
                            },
                           /* {
                                "videoLink": "..",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Restorative Poses",
                                        "ageGroups": "All Ages",
                                        "benefits": "Encourages deep relaxation, supports healing process, reduces fatigue, calms the nervous system.",
                                        "yogaFor": " Cancer Patients"
                                    }
                                ]
                            },
                            {
                                "videoLink": "...",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Meditation",
                                        "ageGroups": "All Ages",
                                        "benefits": "Reduces stress and anxiety, enhances emotional well-being, boosts immune function, fosters inner peace.",
                                      "yogaFor": " Cancer Patients"
                                    }
                                ]
                            },*/
                            {
                                "videoLink": "https://drive.google.com/file/d/1YfbbWe2Rarvf4G1iIpBwZqlzJ6IfkvTw/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Breathing Exercises (Pranayama)",
                                        "ageGroups": "All Ages",
                                        "benefits": "Promotes relaxation, increases lung capacity, reduces stress, enhances oxygenation.",
                                        "yogaFor": " Cancer Patients"
                                    }
                                ]
                            }
                         ],



           // " -------------------------13--- "Post-Traumatic Stress Disorder (PTSD)":----------------------------------------------"

                "Post-Traumatic Stress Disorder (PTSD)": [
                    
                    {
                        "videoLink": "https://drive.google.com/file/d/1YfbbWe2Rarvf4G1iIpBwZqlzJ6IfkvTw/preview",
                        "imageLink": "",
                        "poses": [
                            {
                                "pose": "Restorative Yoga Poses",
                                "ageGroups": "All Ages",
                                "benefits": "Promotes relaxation, reduces anxiety and stress, calms the nervous system, supports emotional healing.",
                                "yogaFor": " PTSD"
                            }
                        ]

                    },
                    
                    
                    /*
                    {
                        "videoLink": "",
                        "imageLink": "",
                        "poses": [
                            {
                                "pose": "Yin Yoga Poses",
                                "ageGroups": "All Ages",
                                "benefits": "Encourages deep relaxation, releases tension in the body and mind, improves flexibility, cultivates mindfulness.",
                                "yogaFor": " PTSD"
                            }
                        ]
                    },
                    {
                        "videoLink": "",
                        "imageLink": "",
                        "poses": [
                            {
                                "pose": "Yoga Nidra",
                                "ageGroups": "All Ages",
                                "benefits": "Promotes deep relaxation, reduces stress and anxiety, supports emotional healing and self-awareness.",
                                "yogaFor": " PTSD"
                            }
                        ]
                    },*/


                    {
                        "videoLink": "https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                        "imageLink": "",
                        "poses": [
                            {
                                "pose": "Corpse Pose (Savasana)",
                                "ageGroups": "All Ages",
                                "benefits": "Facilitates deep relaxation, reduces anxiety, calms the mind and nervous system, fosters a sense of peace.",
                                "yogaFor": " PTSD"
                            }
                        ]
                    }
    

                ],








           // " -------------------14---- "Obesity":---------------------------------------------------"

                "Obesity": [

                    
                            {
                                "videoLink": "https://drive.google.com/file/d/19hQQEfq0M1iW-qXcwaoToxV2paLKD0R-/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Dynamic practices like Power Yoga and Vinyasa Flow",
                                        "ageGroups": "Adults",
                                        "benefits": "Promotes weight loss, increases metabolism, improves cardiovascular health, enhances flexibility and strength.",
                                        "yogaFor": " Obesity"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Q91o8GajG5w6g0QyV_N1uKDdiH_gQMCP/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Sun Salutations (Surya Namaskar)",
                                        "ageGroups": "Adults",
                                        "benefits": "Boosts metabolism, increases flexibility, strengthens muscles, promotes weight loss, improves circulation.",
                                        "yogaFor": " Obesity"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1PM1uzLZTwZSJhLOqBcio6CcOVfiVcC7L/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Standing Forward Bend (Uttanasana)",
                                        "ageGroups": "Adults",
                                        "benefits": "Stretches the spine and hamstrings, stimulates digestion, reduces stress, tones the abdomen.",
                                        "yogaFor": " Obesity"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1zYOjwfKJBgTnMk7GIZ6JPU9s0gMfykdq/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Downward-Facing Dog Pose (Adho Mukha Svanasana)",
                                        "ageGroups": "Adults",
                                        "benefits": "Strengthens the arms and legs, lengthens the spine, improves digestion, reduces stress and fatigue.",
                                        "yogaFor": "Obesity"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1w7-Ry59H9hqkjScqI-sMWuJoYVTfYfOj/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Warrior Poses (Virabhadrasana I and II)",
                                        "ageGroups": "Adults",
                                        "benefits": "Strengthens the legs, hips, and core muscles, improves balance, increases stamina, reduces stress.",
                                        "yogaFor": " Obesity"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults",
                                        "benefits": "Strengthens the back, opens the chest and shoulders, improves circulation, energizes the body.",
                                        "yogaFor": " Obesity"
                                    }
                                ]
                            }
                        
                    
    
                ],






                           // " -----------------15----   "Blood Pressure":-----------------------------------------------------"

                "Blood Pressure": [
                   
                            {
                                "videoLink": "https://drive.google.com/file/d/1Uw79ZBLK2tCvCqZHf3KPeSiiY4cyHu3f/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Corpse Pose (Savasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes relaxation, reduces stress, calms the mind, lowers blood pressure.",
                                        "yogaFor": " Blood Pressure ,Anxiety and Stress, Insomnia, Hypertension, Depression, Chronic Fatigue Syndrome, PTSD, Obesity, "
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1DZIa9fasQ2g0CX77ciG9qxz9lH3cRJX0/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Legs-Up-The-Wall Pose (Viparita Karani)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Reduces stress and anxiety, improves circulation, relieves tension in the legs and lower back, lowers blood pressure.",
                                        "yogaFor": " Blood Pressure"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Child's Pose (Balasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Calms the mind, reduces stress and fatigue, gently stretches the spine and hips, lowers blood pressure.",
                                        "yogaFor": " Blood Pressure"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Strengthens the back and legs, opens the chest, improves circulation, reduces anxiety, lowers blood pressure.",
                                        "yogaFor": " Blood Pressure"
                                    }
                                ]
                            }
       

                ],








                           // " --------------16--  "Diabetes":----------------------------------------------------------"

                "Diabetes": [ 
                   
                           /* {
                                "videoLink": ,
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Hatha Yoga",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Helps lower blood sugar levels, improves insulin sensitivity, reduces stress, and promotes overall well-being.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            },*/
                            {
                                "videoLink": "https://drive.google.com/file/d/1YfbbWe2Rarvf4G1iIpBwZqlzJ6IfkvTw/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Restorative Yoga",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relieves stress, improves circulation, and helps regulate blood sugar levels.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Q91o8GajG5w6g0QyV_N1uKDdiH_gQMCP/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Sun Salutations (Surya Namaskar)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Increases blood circulation, stimulates the pancreas, and improves digestion, helping to manage diabetes.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1bPdA-vTwl9sBHvI8pasUBwxow2f1SFwL/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Seated Forward Bend (Paschimottanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stimulates the pancreas, massages the abdominal organs, and helps regulate blood sugar levels.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1EfkgIHTodXjJHtFuLDFmj446drYOK1pb/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Reclining Bound Angle Pose (Supta Baddha Konasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relaxes the body and mind, helps improve circulation, and aids in managing stress and blood sugar levels.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the spine and abdomen, improves digestion, and helps regulate blood sugar levels.",
                                        "yogaFor": " Diabetes"
                                    }
                                ]
                            }
                        
            ],







                       // " --------------17--- "Joint Pain":---------------------------------------------------------"

                "Joint Pain": [
                 
                            {
                                "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Child's Pose (Balasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relieves tension in the lower back and hips, gently stretches the spine and shoulders, and helps alleviate joint pain.",
                                        "yogaFor": " Joint Pain"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1O8iQcfqgOacbbmAnXUJgxBSVL4ycx-S1/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Supine Spinal Twist (Supta Matsyendrasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the spine and shoulders, improves spinal flexibility, and helps reduce stiffness and discomfort in the joints.",
                                        "yogaFor": " Joint Pain"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes flexibility in the spine and shoulders, improves circulation to the joints, and reduces stiffness and pain.",
                                        "yogaFor": " Joint Pain"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1zYOjwfKJBgTnMk7GIZ6JPU9s0gMfykdq/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Downward-Facing Dog Pose (Adho Mukha Svanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches and strengthens the entire body, improves joint flexibility, and reduces pain and stiffness in the joints.",
                                        "yogaFor": " Joint Pain"
                                    }
                                ]
                            }
   
       
            ],




           // " ------------------------18 "Spinal Disorder":--------------------------------------------------"

                "Spinal Disorder": [ 
                    
               
                            {
                                "videoLink": "https://drive.google.com/file/d/1FKL_0qG1gpwm9xJWB8OqeJPWSUpFLkOA/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Cat-Cow Pose (Marjaryasana-Bitilasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Promotes flexibility and mobility in the spine, strengthens the back muscles, and improves spinal alignment.",
                                        "yogaFor": " Spinal Disorder"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1RnlSXg38JwvL9lIc9nV_GnzQy9YlwQIF/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Child's Pose (Balasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Relieves tension in the spine, stretches the back muscles, and provides gentle traction to the spine, promoting relaxation.",
                                        "yogaFor": " Spinal Disorder"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bridge Pose (Setu Bandhasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Strengthens the back muscles, opens up the chest and shoulders, and improves spinal flexibility and posture.",
                                        "yogaFor": "Spinal Disorder"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1PM1uzLZTwZSJhLOqBcio6CcOVfiVcC7L/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Standing Forward Bend (Uttanasana)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Stretches the spine, hamstrings, and calves, relieves tension in the back, and improves spinal alignment.",
                                        "yogaFor": " Spinal Disorder"
                                    }
                                ]
                            }
                       
            ],



           // " --------------------------19--  "Asthma":----------------------------------------------"


                "Asthma": [
                    
                   
                            {
                                "videoLink": "https://drive.google.com/file/d/1YfbbWe2Rarvf4G1iIpBwZqlzJ6IfkvTw/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Pranayama (Breathing Exercises)",
                                        "ageGroups": "Children, Adults, and Seniors",
                                        "benefits": "Improves lung function, increases lung capacity, reduces breathlessness, and promotes relaxation.",
                                        "yogaFor": " Asthma"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1JeYxMayymD-iBaBOTYYQ9KWkWrl4JAbY/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Sukhasana (Easy Pose)",
                                        "ageGroups": "Children, Adults, and Seniors",
                                        "benefits": "Calms the mind, reduces stress and anxiety, and helps regulate breathing.",
                                        "yogaFor": " Asthma"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1Na8qityMhYnC-_4ksYpCb4yZXg78ahRE/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Bhujangasana (Cobra Pose)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Expands the chest, improves lung capacity, and strengthens the back muscles.",
                                        "yogaFor": " Asthma"
                                    }
                                ]
                            },
                            {
                                "videoLink": "https://drive.google.com/file/d/1FD8rqsb-BqkghLSMueQS3aTzp4eREWdI/preview",
                                "imageLink": "",
                                "poses": [
                                    {
                                        "pose": "Setu Bandhasana (Bridge Pose)",
                                        "ageGroups": "Adults and Seniors",
                                        "benefits": "Opens up the chest, improves breathing capacity, and relieves tension in the chest and shoulders.",
                                        "yogaFor": " Asthma"
                                    }
                                ]
                            }
                   ]




        };

        return videoMap[disease] || [];
    }
});
