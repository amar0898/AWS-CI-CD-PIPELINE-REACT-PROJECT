# 🚀 React Propel: Automated AWS CI/CD Deployment
Using a 𝗗𝗼𝗰𝗸𝗲𝗿 𝗶𝗺𝗮𝗴𝗲, I recently built an AWS 𝗖𝗜/𝗖𝗗 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 for deploying my 𝗥𝗲𝗮𝗰𝘁 𝘀𝘁𝗮𝘁𝗶𝗰 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 on an 𝗔𝗪𝗦 𝗘𝗖𝟮 𝗶𝗻𝘀𝘁𝗮𝗻𝗰𝗲. Below you can find the hosted website and my GitHub repository link. Here's the step-by-step process I followed:

### 1️⃣ 𝗔𝗪𝗦 𝗖𝗼𝗱𝗲𝗕𝘂𝗶𝗹𝗱 𝗦𝗲𝘁𝘂𝗽:<br> 
Created a CI/CD project using GitHub as the source repository, leveraging a buildspec.yml file to define build phases and a Dockerfile to containerize the application. The pipeline automated the build, test, and Docker image creation process for deployment.

### 2️⃣ 𝗗𝗼𝗰𝗸𝗲𝗿 𝗖𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆:<br> 
Stored Docker credentials in 𝗔𝗪𝗦 𝗦𝘆𝘀𝘁𝗲𝗺𝘀 𝗠𝗮𝗻𝗮𝗴𝗲𝗿.

### 3️⃣ 𝗔𝗪𝗦 𝗖𝗼𝗱𝗲𝗣𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝗦𝗲𝘁𝘂𝗽:<br> 
Set up a CodePipeline with 𝗖𝗼𝗱𝗲𝗕𝘂𝗶𝗹𝗱 as the build stage after the source stage.

### 4️⃣ 𝗘𝗖𝟮 𝗜𝗻𝘀𝘁𝗮𝗻𝗰𝗲 𝗣𝗿𝗼𝘃𝗶𝘀𝗶𝗼𝗻𝗶𝗻𝗴: <br>
Created an EC2 instance to host the website and installed the 𝗖𝗼𝗱𝗲𝗗𝗲𝗽𝗹𝗼𝘆 𝗮𝗴𝗲𝗻𝘁.

### 5️⃣ 𝗖𝗼𝗱𝗲𝗗𝗲𝗽𝗹𝗼𝘆 𝗦𝗲𝘁𝘂𝗽: <br>
Created a CodeDeploy project to deploy the Docker image and container to the EC2 instance with an 𝗮𝗽𝗽𝘀𝗽𝗲𝗰.𝘆𝗺𝗹 file.

### 6️⃣ 𝗣𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗶𝗼𝗻:<br>
 Added 𝗖𝗼𝗱𝗲𝗗𝗲𝗽𝗹𝗼𝘆 as the deploy stage in 𝗖𝗼𝗱𝗲𝗣𝗶𝗽𝗲𝗹𝗶𝗻𝗲, making the website live on EC2 once all stages are complete.

### 🚧 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲𝘀 𝗙𝗮𝗰𝗲𝗱 🚧
Building the AWS CI/CD pipeline and setting up the services together wasn’t easy. There were many challenges, including Docker image issues, but I learned a lot through debugging. I’m excited to share insights and tips in my next post to help others facing similar challenges!
