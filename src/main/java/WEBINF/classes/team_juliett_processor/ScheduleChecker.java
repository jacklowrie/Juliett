/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;
import java.util.ArrayList;
import java.util.LinkedHashSet;

/**
 *
 * @author Jeremymidvidy
 */
public class ScheduleChecker {

    private schedule possibleSchedules;

    public ScheduleChecker(schedule s)
    {
        possibleSchedules = s;
    }

    ////////////////===========================REMOVE CONFLICTS MAIN METHOD=====================/////////////////

    public schedule[] resolveConflicts()
    {

       //Get the two arrays of courses for the resolveConflicts() helper methods
       Course[] l1 = possibleSchedules.getMandCourses();
       Course[] l2 = possibleSchedules.getOptCourses();
       
       

       //~~Make all the possible combinations of each list~~//
       ArrayList<ArrayList<Course>> mandList = makeCombinations(l1);
       ArrayList<ArrayList<Course>> optList = makeCombinations(l2);

       //remove conflicts from each individual list
       mandList = removeConflicts(mandList);
       optList = removeConflicts(optList);

       //Make each combination of mandatory classes with every possible combinations of additional classes//
       ArrayList<ArrayList<Course>> allSchedulesList = makeFullList(mandList, optList);

       //Then remove conflicts from the total list
       allSchedulesList = removeConflicts(allSchedulesList);
       
       //Remove all combinations that are not four in length
       //if none are 4 in length, then don't change the list
       allSchedulesList = shortenList(allSchedulesList);

       //Convert from ArrayList to an arrayof Schedules//
       schedule allSchedules = new schedule(allSchedulesList, l1, l2);
       schedule[] aS = allSchedules.getAllSchedules();
     

       //this is an array of schedules
       return aS;

    }

    ////////////========================= HELPER METHODS ================================/////

    //returns true if the two courses conflict
    private boolean conflicts(Course c1, Course c2)
    {
       if(c1.conflict(c2) == true)
           return true;
       else
           return false;

    }
    
    ///Removes the conflicts from each ArrayList element passed in the entire ArrayList<ArrayList<>> Param
    public ArrayList<ArrayList<Course>> removeConflicts(ArrayList<ArrayList<Course>> list)
        {
        boolean[] switches = new boolean[list.size()];
        int boolCounter = 0;
        boolean done = false;
        for(ArrayList<Course> temp: list)
        {

            for(int k = 0; k < temp.size() && done == false; k++)
            {
                for(int i = k+1; i <= temp.size()-1 && done == false; i++)
                {
                     if(conflict(temp.get(k), temp.get(i)))
                    {
                         switches[boolCounter] = true;
                         done = true;
                    }
                }
            }
            done = false;
            boolCounter++;

        }

        //find the indexes of the switches
        ArrayList<Integer> indexOfConflicts = new ArrayList<Integer>();
        for(int i = 0; i < switches.length; i++)
        {
            if(switches[i] == false)
                indexOfConflicts.add(i); //add the indexes of valid conflicts to the list
        }

        //make a new list of only valid combinations from the indexes of the valid switches
        ArrayList<ArrayList<Course>> validList = new ArrayList<ArrayList<Course>>();
        for(int validIndex : indexOfConflicts)
            {
                validList.add(list.get(validIndex));
            }

        return validList;
    }

    //Shortens the list of l1 to a specficied value
    public static ArrayList<ArrayList<Course>> shortenList(ArrayList<ArrayList<Course>> l1)
    {
        ArrayList<Integer> validIndexes = new ArrayList<Integer>();
        int place = 0;
        for(ArrayList<Course> temp : l1)
        {
            if(temp.size() == 4)
                validIndexes.add(place);
            place++;
        }

        ArrayList<ArrayList<Course>> newList = new ArrayList<ArrayList<Course>>();
        for(int i : validIndexes)
        {
            newList.add(l1.get(i));
        }
        if(newList.size() == 0 || newList == null)
            return l1;
        return newList;
    }

    //Returns true if Course a and Course c have conflicts
    public boolean conflict(Course a, Course c)
    {
        if(a == null)
            return false;
        else if(c == null)
            return false;
        for (int i = 0; i <5; i++){
            if (a.get_days_of_week()[i] && c.get_days_of_week()[i])
                if ((a.start_time == c.start_time) || (a.start_time < c.end_time && a.start_time > c.start_time)
                                                      || (a.end_time > c.start_time && a.end_time < c.end_time))
                    return true;
        }
        return false;
    }


    //takein the Course[] and outputs the ArrayList<ArrayList<Course>> where every ArrayList<Course> element
    //is one of the combinations
    private ArrayList<ArrayList<Course>> makeCombinations(Course[] l1)
    {
       ArrayList<ArrayList<Course>> mainList = new ArrayList<ArrayList<Course>>();

       //[A, B, C, D, E]
       int outerStart = 0;
       while(outerStart < l1.length)
       {
        ArrayList<Course> t = new ArrayList<Course>();
        t.add(l1[outerStart]);
        mainList.add(t);
        for(int firstAdd = outerStart; firstAdd < l1.length; firstAdd++)
         {
           int innerStart = firstAdd +1;
           ArrayList<Course> temp = new ArrayList<Course>();
           for(int i = innerStart; i < l1.length; i++)
                {
                    temp.add(l1[outerStart]);
                    for(int j = innerStart; j <=i; j++)
                        temp.add(l1[j]);
                    mainList.add(temp);
                    temp = new ArrayList<Course>();
                }
         }

          outerStart++;
       }
       return mainList;
    }

    //makes every possible combination of courses
    public ArrayList<ArrayList<Course>> makeFullList(ArrayList<ArrayList<Course>> mandList, ArrayList<ArrayList<Course>> optList)
    {
       if(mandList.size() == 0 || mandList == null)
           return optList;
       if(optList.size() == 0 || optList == null)
           return mandList;
       ArrayList<ArrayList<Course>> fullList = new ArrayList<ArrayList<Course>>();
       //each m is one of the possible list of mandatory classes
       //each o is one of the possible lists of optional classes
       //to make every possible combination:
       //each m gets every possible o stored in a new list
       for(ArrayList<Course> m: mandList)
       {
           for(ArrayList<Course> o: optList)
           {
               ArrayList<Course> temp = new ArrayList<Course>(m); //each temp contains a the next list of mandatory classes from mandList
               for(Course k: o){
                 temp.add(k); }//add the current OptList to temp
               fullList.add(temp); //add the current temp to the full list and then move the next optLists
            }

        }
       return fullList;
    }
}
