/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author Ethan
 */
public class Team_Juliett_processor {

    /**
     * @param args the command line arguments
     */
    private static int number_of_courses;
    
    public static void main(String[] args) throws IOException, ParseException{
        
        BufferedReader br = new BufferedReader(new FileReader("EECS_DB.txt"));
        
        
        String line;
        
        /*//THIS IS FOR TESTING
        Course course1;
        course1 = new Course(58458);
        Course course2;
        course2 = new Course(58459);
        Course course3;
        course3 = new Course(58460);
        Course course4;
        course4 = new Course(58461);
        
        Course[] courselist;
        courselist = new Course[4]
        courselist[0] = course1;
        courselist[1] = course2;
        courselist[2] = course3;
        courselist[3] = course4;
        //THIS IS FOR TESTING*/
        
        User bob; // accept integer array from front-end team
        bob = new User(1, new int[]{58458, 58459, 58460, 58461}, null, 1000, 1700);
        System.out.println(bob.toString());
        
        int[] bobscourses = bob.getMands();
        int[] bobscourses2 = bob.getOptional();
        int numberofCourses = bobscourses.length + bobscourses2.length;
        Course[] bobsCourses;
        bobsCourses = new Course[numberofCourses];
        
        
        while((line = br.readLine()) != null) {
            
            for (int i=0; i<numberofCourses; i++){
                
                String id;
                id = Integer.toString(bobscourses[i]);
                //System.out.println(courselist[i]);
                if (line.contains(id)){
                    
                    int mdIndex = line.indexOf("meeting_days");
                    int stIndex = line.indexOf("start_time");
                    int etIndex = line.indexOf("end_time");
                    int dIndex = line.indexOf("start_date");
                    int tIndex = line.indexOf("title");
                    int t1Index = line.indexOf("term");
                    
                    String title = (line.substring(tIndex+9, t1Index-4));
                    String meetingDays = (line.substring(mdIndex+16, stIndex-4));
                    
                    String startTimeS = "" + (line.substring(stIndex+14,stIndex+16));
                    String startTimeS1 = (line.substring(stIndex+17,stIndex+19));
                    startTimeS += startTimeS1;
                    
                    String endTimeS = (line.substring(etIndex+12, etIndex+14));
                    String endTimeS1 = (line.substring(etIndex+15, etIndex+17));
                    endTimeS += endTimeS1;

                    bobsCourses[i] = new Course(id);

                    bobsCourses[i].setName(title);
                    bobsCourses[i].setDaysofWeek(meetingDays);
                    bobsCourses[i].setStartTime(startTimeS);
                    bobsCourses[i].setEndTime(endTimeS);
                    
                    System.out.println(bobsCourses[i].getIDString());
                    System.out.println(bobsCourses[i].toString());


                    
                    System.out.println("\n");
                    //c.setDaysofWeek(meetingDays));
                    //courses[i] = c;
                }

                
            }
                         
        }
        br.close();
        
        
      
    }

}
