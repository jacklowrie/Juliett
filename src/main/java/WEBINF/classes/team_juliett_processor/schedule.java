/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;
import java.util.*;
/**
 *
 * @author talilaifer
 */
public class schedule {
    
    public static final int NOLUNCH = 41; 
    public static final int LONGWALK = 42;
    
    private Course[] mand_courses;
    private Course[] opti_courses;
    private Course[] all_courses;
    private schedule[] schedule_courses;
    static private int[] warning_messages;
    private schedule[] to_be_rated;
    private int rank = 0;
    
    public int scheduleScore = 0;
    private String warningmessage;
    
    public schedule(Course[] courses1, Course[] courses2){
        warningmessage = "";
        mand_courses = courses1;
        opti_courses = courses2; 
        scheduleScore = 0;
    }
    
    public schedule(Course[] c1)
    {
        
        warningmessage = "";
        all_courses = c1;
        scheduleScore = 0;
    }
    
    
    public schedule(ArrayList<ArrayList<Course>> l, Course[] m, Course[] o) //make the array of schedules from an arraylist of arraylist of courses
    {
        schedule_courses = new schedule[l.size()];
        for(int j = 0; j < l.size(); j++)
        {
            ArrayList<Course> temp = l.get(j);
            Course[] a = new Course[temp.size()];
            for(int i = 0; i < a.length; i++)
            {
                a[i] = temp.get(i);
            }
            schedule_courses[j] = new schedule(a);
        }
        scheduleScore = 0;
        mand_courses = m;
        opti_courses = o;      
    }
    
    
    public schedule[] getAllSchedules()
    {
        return schedule_courses;
    }
    public void processWarningArray(int[] n){
    for(int i = 0; i < n.length; i++){
        int warning_instance = n[i];
        setWarningMessage(warning_instance);
    }
    
    }
   
    public void setWarningMessage(int n){
        if (n == NOLUNCH)
            warningmessage += "you can't eat lunch!";
        else if (n == LONGWALK){warningmessage += "you will have a long walk";}
        
        else
        warningmessage += "warning detected";
        
    }
    
    public String getWarningMessage(){
        return warningmessage;
    }
    
    public int NumOfMandClasses()
    {
        return mand_courses.length;
    }
    
    public Course[] getMandCourses()
    {
        return mand_courses;
    }
    
     public Course[] getOptCourses()
    {
        return opti_courses;
    }
     
    public Course[] getAllCourses()
    {
        return all_courses;
    }
    
    public void setRank(int r)
    {
        rank = r;
    }
    
    public int getRank()
    {
        return rank;
    }
    
    public int[] getIDs()
    {
        int[] IDs = new int[getAllCourses().length];
        //return an int[] of the courseID's in the schedule
        int index = 0;
        for(Course temp: getAllCourses())
        {
            String id = temp.getIDString();
            int j = Integer.valueOf(id);
            IDs[index] = j;
            index++;
        }
        return IDs;
    }
}