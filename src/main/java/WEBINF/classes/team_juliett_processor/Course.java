/*
 *
 */
package team_juliett_processor;
import java.util.*;


/**
 * This class represents an Individual course object.
 * The constructor takes in a String array of Course IDs and sets the fields 
 * of the start times, end times, meeting days, courseID, location, and attributes.
 * This class contains all the relevant information of an individual course.
 * @author Team Juliett
 * @version 6/5/14
 */
public class Course implements Comparable{
    
    // beginning and end of class--formatted HHMM
    private String course_name; 
    protected int start_time;
    protected int end_time;
    private String NorthBuildings;
    
    // days of the week on which the class is held (binary format)
    private boolean[] days_of_week;
    
    // course ID (not to be confused with course number)
    private String course_id;
    
    // course number
    private int course_number;
    
    // location on campus (North, Central, or South as 1, 0, -1, respectively)
    private int location;
    
    // parameters (area 1 distro, etc.)    
    // bool 6 length array
    private boolean[] distros;
    
    /**
     * The constructor of the Course object.
     * Constructs the course object given a courseID.
     * Uses the courseID to find all relevant information about the course
     * like location, meeting days, meeting times, etc...
     * @param course_id The string representation of the courseID.
     */
    public Course(String course_id) {
        this.course_id = course_id;
        days_of_week = new boolean[5];
        for(int i = 0; i < 5; i++){
            //days_of_week[i] = new boolean();
            days_of_week[i] = false;
        }
        this.course_name = "";
        this.course_number = 0;
        this.distros = null;
        this.end_time = 0;
        this.location = 0;
        this.start_time = 0;
        createStringofBuildings();
        
    }
    
    /**
     * This private helper methods helps in the construction of the location field.
     * This method creates a String of every building on North campus.
     */
    private void createStringofBuildings()
    {
       NorthBuildings = "Kellogg Jacobs Center Andersen Hall Women’s Center 2006 Sher "
               + "Fiedler Hillel Center Canterbury House Family Institute 2010 Sh 2016 Sh 620 "
               + "Library Place 626 Library Place Lunt Hall Shanley Hall Cresap Laboratory Central "
               + "Utility Plant 2040 Sheridan Road 617 Library Place Sheil "
               + "Catholic Center Garett-Evangelical Theological Seminary Annenberg Hall "
               + "Silverman Hall 2122 Sheridan Ford Catalysis Center Ryan Hall Hogan Pancoe "
               + "Allen Center Cook Hall Tech Seeley G. Mudd Library Frances 627 Dartmouth "
               + "Place 620 Lincoln Street 629 Colfax Street 625 Colfax Street";
    }
    
    /**
     * Returns the courseID of the course object.
     * 
     * @return A String containing the four-digit courseID of by this object.
     */
    public String getIDString(){
        return course_id;
    }
    
    /**
     * Returns the start and end times of this object
     * @return An array with two elements.  The first is the start time and the second is the end time.
     */
    public int[] get_times() {
        
        int [] x;
        x = new int[2];
        x[0] = start_time;
        x[1] = end_time;
        
        return x;
    }
    
    /**
     * Returns the meeting days of this Course object.
     * @return The days of the week represented by a array of boolean values.  There are seven elements in the array representing each day in the week such the first element represents Sunday and last element represents Saturday.  If the value is true, then the course meets on that day.  If the value is false, then the course does not meet on that day.
     */
    public boolean[] get_days_of_week(){
        return days_of_week;
    }
        
    /**
     * Returns true if this course has a time conflict with the inputted course.
     * If this course starts before the inputted course ends, then the two courses conflict.
     * If this course ends before the inputted course starts, then the two courses conflict.
     * @param c A course object to be compared to.
     * @return A boolean value.  True if there is a time conflict and false is there is no time conflict.
     */
    public boolean conflict (Course c){
        for (int i = 0; i <5; i++){
            if (this.days_of_week[i] && c.days_of_week[i])
                if ((this.start_time == c.start_time) || (this.start_time < c.end_time && this.start_time > c.start_time)
                                                      || (this.end_time > c.start_time && this.end_time < c.end_time))
                    return true;
        }
        return false;
    }
    
    /**
     * Sets the course name of this object.
     * @param t The value to set the name to.
     */
    public void setName(String t){
        this.course_name = t;
    }
    
    /**
     * Returns the current name of this object.
     * @return The String containing the name of the course.
     */
    public String getName(){
        return course_name;
    }
    
    /**
     * Sets the location of this object to the inputted value.
     * @param l New location of the course.
     */
    public void setLocation(String l)
    {
        //first parse the string until the first space
        int endIndex = l.indexOf(' ');
        String shortLoc = l.substring(0, endIndex);
        if(NorthBuildings.contains(shortLoc))
            location = -1;
        else
            location = 1;
    }
    
    /**
     * Returns the location this object.
     * @return An integer representing the location of the course.  If the location is North of Kellogg, then its location value is 1.  If the course is South of Kellogg, then the location value is -1.
     */
    public int getLocation(){
        return location;
    }
            
    
    
    /**
     * Given a String of meeting days, sets the new meeting days of the course to the inputted String,
     * @param t A String representing the meeting days of the course.
     */
    public void setDaysofWeek(String t){
        if (t.contains("Mo"))
            days_of_week[0] = true;
        if (t.contains("Tu"))
            days_of_week[1] = true;
        if (t.contains("We"))
            days_of_week[2] = true;
        if (t.contains("Th"))
            days_of_week[3] = true;
        if (t.contains("Fr"))
            days_of_week[4] = true;
    }
    
    /**
     * Returns the days of the week that this course meets.
     * @return A String of every day of the week.  Next to each day is a boolean value.  If the boolean value is true, then this course meets on that day.  If the boolean value is false, then this course does not meet on that day.
     */
    public String getDaysofWeek(){
        //test to see if the days of the week are being set correctly
        return "----" + this.course_name + "----" +
                "\nMo: " + days_of_week[0] + 
                "\nTu: " + days_of_week[1] + 
                "\nWe: " + days_of_week[2] + 
                "\nTh: " + days_of_week[3] + 
                "\nFr: " + days_of_week[4];
    }
    
    /**
     * Sets the start time of the course object to the inputted value.
     * @param t The start time to set the start time of this course to.
     */
    public void setStartTime(String t){
        this.start_time = Integer.parseInt(t);
    }
    
    /**
     * Sets the end time of the course to the inputted value.
     * The end time to set the end time of this course to.
     * @param u 
     */
    public void setEndTime(String u){
        this.end_time = Integer.parseInt(u);
    }
    
    /**
     * The toString method for the course class.  Returns a string representing the course data in the following form:
     * "Course name, meeting days, start time, end time."
     * 
     * @return A String representation of this course object.
     */
    public String toString(){
        String toPrint = ""; 
        toPrint += course_name;
        toPrint += getDaysofWeek() + "\nStarts at " + this.start_time + "\nEnds at " + this.end_time;
        
        return toPrint;
    }
    
    /**
     * Return the value of comparing the location of this course to the inputted course.  If the value is 1, then both courses are on the same half of campus.  If the value is -1, then each course is on a different side of campus.
     * @param next The next course object to compare to.
     * @return The value of comparing this location to next's location.
     */
    public int nextLocationRank(Course next)
    {
       if(next.getLocation() == this.getLocation()) 
           return 1;
       else
           return -1;
    }
   
    /**
     * Returns the value of comparing this course to the inputted course.  If they are the same course, then the return value is 1.  If they are different courses, then the return value is 0.
     * @param o
     * @return The value of comparing this course to the inputted course.
     */
    public int compareTo(Object o) 
    {
        if(o == this)
            return 1;
        else
            return 0;
    }
}
