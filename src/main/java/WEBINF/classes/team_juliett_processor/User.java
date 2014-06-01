/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;

/**
 *
 * @author Ethan
 */
public class User {
    private int location;   // 0 = South; 1 = Central; 2 = North
    
    private int start;
    private int end;
    
    private int[] mand = new int[max_mand_length];
    private int[] option = new int[max_option_length];
    
    private static final int max_mand_length = 5;
    private static final int max_option_length = 5;

    
    public User() {
        
    }
    
    public User(int loc, int[] mand_courses, int[] optional_courses, int start_t, int end_t) {
        location = loc;
        mand = mand_courses;
        option = optional_courses;
        start = start_t;
        end = end_t;
    }
    
    
    public int getLoc() {
        return location;
    }
    
    public int getStartTime(){
        return start;
    }
    
    public int getEndTime(){
        return end;
    }
    
    public int[] getMands(){
        return mand;
    }
    
    public int[] getOptional(){
        return option;
    }
    
    public String toString(){
        return "This is user " + (location+start+end)*12;
    }

     


}
