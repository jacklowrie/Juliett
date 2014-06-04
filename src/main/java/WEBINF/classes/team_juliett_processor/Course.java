/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package team_juliett_processor;
import java.util.*;


/**
 *
 * @author Ethan
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
    

    // pre-requisites
    
// major/minor requirements

    /*------------------------------------------------------------------------*/
    
// constructor
    
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
    
    private void createStringofBuildings()
    {
       NorthBuildings = "Kellogg Jacobs Center Andersen Hall Women's Center 2006 Sher "
               + "Fiedler Hillel Center Canterbury House Family Institute 2010 Sh 2016 Sh 620 "
               + "Library Place 626 Library Place Lunt Hall Shanley Hall Cresap Laboratory Central "
               + "Utility Plant 2040 Sheridan Road 617 Library Place Sheil "
               + "Catholic Center Garett-Evangelical Theological Seminary Annenberg Hall "
               + "Silverman Hall 2122 Sheridan Ford Catalysis Center Ryan Hall Hogan Pancoe "
               + "Allen Center Cook Hall Tech Seeley G. Mudd Library Frances 627 Dartmouth "
               + "Place 620 Lincoln Street 629 Colfax Street 625 Colfax Street";
    }
    
    public String getIDString(){
        return course_id;
    }

    /*------------------------------------------------------------------------*/    

// return the start and end times
    public int[] get_times() {
        
        int [] x;
        x = new int[2];
        x[0] = start_time;
        x[1] = end_time;
        
        return x;
    }
    
    
    public boolean[] get_days_of_week(){
        return days_of_week;
    }
            
    public boolean conflict (Course c){
        for (int i = 0; i <5; i++){
            if (this.days_of_week[i] && c.days_of_week[i])
                if ((this.start_time == c.start_time) || (this.start_time < c.end_time && this.start_time > c.start_time)
                                                      || (this.end_time > c.start_time && this.end_time < c.end_time))
                    return true;
        }
        return false;
    }
    
    public void setName(String t){
        this.course_name = t;
    }
    
    public String getName(){
        return course_name;
    }
    
    public void setLocation(String l)
    {
        if(NorthBuildings.indexOf(l) == -1)
            location = -1;
        else
            location = 1;
    }
    
    public int getLocation(){
        return location;
    }
            
    
    
    
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
    
    public String getDaysofWeek(){
        //test to see if the days of the week are being set correctly
        return "----" + this.course_name + "----" +
                "\nMo: " + days_of_week[0] + 
                "\nTu: " + days_of_week[1] + 
                "\nWe: " + days_of_week[2] + 
                "\nTh: " + days_of_week[3] + 
                "\nFr: " + days_of_week[4];
    }
    
    public void setStartTime(String t){
        this.start_time = Integer.parseInt(t);
    }
    
    public void setEndTime(String u){
        this.end_time = Integer.parseInt(u);
    }
        
    public String toString(){
        String toPrint = ""; 
        toPrint += course_name;
        toPrint += getDaysofWeek() + "\nStarts at " + this.start_time + "\nEnds at " + this.end_time;
        
        return toPrint;
    }
    
    //compares the first course location to the next course location
    //returns 1 if both are the same, and -1 if you have to go north to south or south to north
    public int nextLocationRank(Course next)
    {
       if(next.getLocation() == this.getLocation()) 
           return 1;
       else
           return -1;
    }

    @Override
    public int compareTo(Object o) 
    {
        if(o == this)
            return 1;
        else
            return 0;
    }
}
