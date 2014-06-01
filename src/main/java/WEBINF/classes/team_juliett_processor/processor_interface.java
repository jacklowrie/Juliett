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
public interface processor_interface{
    
    public Course[] parse_course_ids(int[] course_ids);
    //returns array of courses when course id's are inputted
    
    public boolean mandatory_conflicts(Course[] courses);
    //returns true if two (or more) "have to take" courses have a time conflict
    //marks which courses interfere and utilizes a counter to track how many conflicts there are

    public int[] generate_good_courselists(Course[] shufflees);
    //array size determined by # of mandatory conflicts
    //int[0] = course[]
    //ex: for 3 mandatory conflicts, the int array will store 3 course arrays
    
    public int[] generate_schedules_list(int[] good_course_list);
    //uses combinations algorithm to create groups of 4 courses
    //"have to take" courses are autofilled
    //uses boolean values to determine time conflicts
    
    public void rate_schedules (int[] schedule_list);
    //THIS WILL REQUIRE A NEW CLASS - "schedule" - with 2 data members. a course[] and private int rating
    //assigns numerical score/rating to a group of four courses
    //this rating is based on rating factors
    
    public void set_warning_message (schedule sL);
    //sets warning message based on warning factors
    
    public int[] get_rated_schedules (int[] schedule_list);
    //returns int array of top 5 schedules with proper warning messages
    
    
}
