### Description

	TODO:

### Set up
	
Host: heroku
Server: Tomcat
Management: Maven


#### 1. Create repo

Make sure you have the same codes as current repo.  
If you already set a git direcotory on your laptop, run:  

	git pull

Otherwise, find a location and run:  

	git clone git@github.com:JBLowrie/Juliett.git
	
#### 2. Import it in Eclipse

Using eclipse EE as example. Right click in project Explorer, click on "import". 
![1](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/1.png)

Then choose Maven -> Existing Maven Projects. Browse Directory in Step 1.

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/2.png)

After seconds, you should see a project like this:

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/3.png)

#### 3. Create "run tool"

The program could not simply run. In eclipse, choose "Run" -> "External Tools" -> "External Tools Configuration".  

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/4.png)

Double click on the "Program" in left side, give it an any name you like. But Make sure you set "Location" and "Working Directory" right

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/5.png)

click "Browse Workspace..." for location, and choose "run.sh":

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/7.png)

click "Browse Workspace..." for Working Direcotry, choose project name:

![2](https://raw.githubusercontent.com/JBLowrie/Juliett/master/readme_image/6.png)

#### 4. Run
Ok, everything almost done. Make sure you use external tools to run the program.

If you have some problem like "permission denied", go to the directory holds "run.sh", and typein the command:

    chmod a+x run.sh


The program will run a server on loalhost, you can visit it in your borwser with link: 
	
	localhost:8080

Pay attention that it will automatically find html pages udner **/src/main/webapp/**, by default, it runs index.html. 

#### 5. Set up in heroku

You can also push your codes to heroku and see it in a public link: http://juliett-nu.herokuapp.com/. 

##### 5.1 Install heroku, 
[Start here]("https://devcenter.heroku.com/articles/quickstart"). Briefly speaking, heroku helps you do all the things on backend, and what you need is to install a command tool to use it.

......

