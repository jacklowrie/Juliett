/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;
// hi
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
    private static int[] mainIDs;
    
    public Team_Juliett_processor(int loca, int[] mand_courses, int[] optional_courses, int start_t, int end_t) throws IOException, ParseException{
        
        // ~~ Begin search of the file ~~ //
        BufferedReader br = new BufferedReader(new FileReader("src/main/java/WEBINF/classes/team_juliett_processor/FinalDB.txt"));
        String line;
        
        
        User bob; // accept integer array from front-end team
        
        //================================================================/////
        //ZHAOYANG this part needs to take in input from the front end====/////
        //bob can either be given by the front end and just make bob = frontEndBob
        //or the inputs from bob can be given by the front end
        //IMPORT FROM THE FRONT END////
        bob = new User(loca, mand_courses, optional_courses, start_t, end_t);
        
        //=================================================================////
        
        int[] bobsMcoursesint = bob.getMands();
        int[] bobsOcoursesint = bob.getOptional();
        int numberofCourses = bobsMcoursesint.length;
        int numberofOCourses = bobsOcoursesint.length;
        
        Course[] bobsMcourses;
        Course[] bobsOcourses;
        
        bobsMcourses = new Course[numberofCourses];
        bobsOcourses = new Course[numberofOCourses];

        while((line = br.readLine()) != null) {
            
            for (int i=0; i<numberofCourses; i++){
                
                String id;
                id = Integer.toString(bobsMcoursesint[i]);
                //System.out.println(courselist[i]);
                if (line.contains(id)){
                    
                    int mdIndex = line.indexOf("meeting_days");
                    int stIndex = line.indexOf("start_time");
                    int etIndex = line.indexOf("end_time");
                    int dIndex = line.indexOf("start_date");
                    int tIndex = line.indexOf("\"title\"");
                    int t1Index = line.indexOf("\"term\"");
                    
                    // ~~ Start Location Functions ~~ //
                    int lIndex = line.indexOf("room");
                    
                    String loc = (line.substring(lIndex+7, line.indexOf("meeting_days") - 2));
                    if(loc.contains("TBA") || loc.contains("null"))
                        loc = "Kellogg ";
  
                    
                    
                    String title = (line.substring(tIndex+10, t1Index - 3));
                    if(title.contains("ul"))
                            title = "No Title for this class";
                    
                    String meetingDays = (line.substring(mdIndex+16, stIndex-4));
                    if(meetingDays.contains("ul"))
                            meetingDays = "Tu";
                    
                    String startTimeS = "" + (line.substring(stIndex+14,stIndex+16));
                    String startTimeS1 = (line.substring(stIndex+17,stIndex+19));
                    startTimeS += startTimeS1;
                    if(startTimeS.contains("ul"))
                            startTimeS = "0700";
                    
                    String endTimeS = (line.substring(etIndex+12, etIndex+14));
                    String endTimeS1 = (line.substring(etIndex+15, etIndex+17));
                    endTimeS += endTimeS1;
                    if(endTimeS.contains("ul"))
                        endTimeS = "0800";

                    
                    bobsMcourses[i] = new Course(id);   
                    bobsMcourses[i].setName(title);
                    bobsMcourses[i].setDaysofWeek(meetingDays);
                    bobsMcourses[i].setStartTime(startTimeS);
                    bobsMcourses[i].setEndTime(endTimeS);
                    bobsMcourses[i].setLocation(loc);
                } 
            }
            
            for (int i=0; i<numberofOCourses; i++){
                
                String id;
                id = Integer.toString(bobsOcoursesint[i]);
                //System.out.println(courselist[i]);
                if (line.contains(id)){
                    
                    int mdIndex = line.indexOf("meeting_days");
                    int stIndex = line.indexOf("start_time");
                    int etIndex = line.indexOf("end_time");
                    int dIndex = line.indexOf("start_date");
                    int tIndex = line.indexOf("\"title\"");
                    int t1Index = line.indexOf("\"term\"");
                    
                    // ~~ Start Location Functions ~~ //
                    int lIndex = line.indexOf("room");
                    
                    String loc = (line.substring(lIndex+7, line.indexOf("meeting_days") - 2));
                    if(loc.contains("TBA") || loc.contains("null"))
                        loc = "Kellogg ";
                    
                    String title = (line.substring(tIndex+10, t1Index-3));
                     if(title.contains("ul"))
                            title = "No Title for this class";
                    String meetingDays = (line.substring(mdIndex+16, stIndex-4));
                    if(meetingDays.contains("ul"))
                            meetingDays = "Tu";
                    
                    String startTimeS = "" + (line.substring(stIndex+14,stIndex+16));
                    String startTimeS1 = (line.substring(stIndex+17,stIndex+19));
                    startTimeS += startTimeS1;
                     if(startTimeS.contains("ul"))
                            startTimeS = "7000";
                    
                    String endTimeS = (line.substring(etIndex+12, etIndex+14));
                    String endTimeS1 = (line.substring(etIndex+15, etIndex+17));
                    endTimeS += endTimeS1;
                    if(endTimeS.contains("ul"))
                        endTimeS = "8000";

                    bobsOcourses[i] = new Course(id);

                    bobsOcourses[i].setName(title);
                    bobsOcourses[i].setDaysofWeek(meetingDays);
                    bobsOcourses[i].setStartTime(startTimeS);
                    bobsOcourses[i].setEndTime(endTimeS);
                    bobsOcourses[i].setLocation(loc);

                }

                         
        }
        }
        br.close();
        
        
        
        //~~Begin building the schedule~~//
        
        //first clean up nescesary courses
        
        
        
        schedule unChecked = new schedule(bobsMcourses,bobsOcourses);
        ScheduleChecker a = new ScheduleChecker(unChecked);
        schedule[] validSchedules = a.resolveConflicts();
        ScheduleGenerator b = new ScheduleGenerator(validSchedules, bob,bobsMcourses, bobsOcourses);
        schedule finalSchedule = b.getBestSchedule();
        
        int[] courseIDs = finalSchedule.getIDs();
        mainIDs = courseIDs;
        
        for(int i = 0; i < courseIDs.length; i++)
        {
            System.out.println(courseIDs[i] + " ");
        }
        
        
        //get the course[]
        //move int[] id's
        //lookup course id and send all the information in the key back to jack
        
    }
    
    public int[] getSchedule()
    {
        return mainIDs;
    }

}


