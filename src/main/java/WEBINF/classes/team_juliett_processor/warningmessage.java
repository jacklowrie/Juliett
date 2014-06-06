/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package team_juliett_processor;

/**
 *
 * @author talilaifer
 */


public class warningmessage {
    
    public static int number_of_warnings = 10;
    
    private String warning;
    private int warningNumber;
    
    public warningmessage(){
        warning = "null";
        warningNumber = 0;
    }
    
    public warningmessage(String wm, int wn){
        warning = wm;
        warningNumber = wn;
    }
    
    public int amIThisCommand (String check_warning){
        if (warning.equals(check_warning))
            return warningNumber;
        else
            return 0;  
    }
}  
