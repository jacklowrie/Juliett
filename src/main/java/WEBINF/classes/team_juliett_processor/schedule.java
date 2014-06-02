/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;

import java.util.ArrayList;

/**
 *
 * @author talilaifer
 */
public class schedule {
    
    private Course[] mand_courses;
    private Course[] opti_courses;
    private int rating;
    static private int[] warning_messages;
    
    private ArrayList<Course> results;
    private Course[] to_be_rated;
    
    private String warningmessage;
    
    public schedule(Course[] courses1, Course[] courses2){
        warningmessage = "";
        mand_courses = courses1;
        opti_courses = courses2;
        rating = 0;
        to_be_rated = new Course[64];
    }
    
    public schedule(Course[] c){
        
    }
    
   /* private void shuffle() {
        int mand_l = mand_courses.length;
        int opti_l = opti_courses.length;
        
        results.add(mand_courses[0]);
        
        for (int ii = 0; ii < mand_l; ii++) {
            for (int jj = 0; jj <mand_l; jj++) {
                if (ii != jj) {
                    if (!mand_courses[ii].conflict(mand_courses[jj])) {
                        results.add(mand_courses[jj]);
                    } else {
                        
                    }
                }
            }
        }
        
    }
    
    private void recAdd(CourseList c){
        if (!)
    }
    
    */
    
//    public Course[] select_4_courses(Course[] mand, Course[] opt){
//    //from a list of mandatory and optional courses, this function populates a course array
//    //of four possible courses
//        int mand_l = mand.length;
//        int opt_l = opt.length;
//        
//        
//        
//        
//        
//    }
    
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
    
       
        
    public static final int NOLUNCH = 41; 
    public static final int LONGWALK = 42;
    
    
}
