package course;


public class CourseData implements java.io.Serializable{
   
    public Course[] courseList;
    
    public CourseData() {
    	courseList = new Course[5];
    	courseList[0] = new Course("Math", 1, "14-16");
    	courseList[1] = new Course("Physics", 2, "10-12");
    	courseList[2] = new Course("Chemistry", 2, "20-21");
    	courseList[3] = new Course("History", 3, "16-17");
    	courseList[4] = new Course("Biology", 4, "08-10");
    	
    }
    
    public String getCourseList() { return "abc"; }
    
}