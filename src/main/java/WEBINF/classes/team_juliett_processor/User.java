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
    public String[] getSchedule(){
    System.out.println("Hi");
    String[] r;
    r = new String[2];
    r[0] = new String("58468, title: Data Structures & Data Management, term: 2013 Fall, school: MEAS, instructor: {name: Peter I Scheuermann, bio: null, address: null, phone: null, office_hours: null}, subject: EECS, catalog_num: 214-0, section: 20, room: Tech Institute Lecture Room 5, meeting_days: MoWeFr, start_time: 12:00:00, end_time: 12:50:00, start_date: 2013-09-24, end_date: 2013-12-07, seats: 0, overview: null, topic: null, attributes: Prerequisites apply, see description\n\n, requirements: null, component: LEC, class_num: 15640, course_id: 4969, coursedesc_set: [], coursecomponent_set: []},");
    r[1] = new String("58469, title: Fundamentals of Signals & Systems, term: 2013 Fall, school: MEAS, instructor: {name: Thrasyvoulos N Pappas, bio: null, address: null, phone: null, office_hours: null}, subject: EECS, catalog_num: 222-0, section: 20, room: Technological Institute M166, meeting_days: MoTuWeFr, start_time: 14:00:00, end_time: 14:50:00, start_date: 2013-09-24, end_date: 2013-12-07, seats: 25, overview: null, topic: null, attributes: null, requirements: null, component: LEC, class_num: 15875, course_id: 7131, coursedesc_set: [], coursecomponent_set: []}, ");
    return r;
    }
  


}
