using System;
using System.Collections.Generic;

namespace Question4
{
    class Program
    {
        static void Main(string[] args)
        {
            //program loop
            while (true)
            {

                //gets user input
                string unvalidatedString = PromptUser();

                //gets answer
                bool answer = StringValidator(unvalidatedString);

                //displays answer
                Console.WriteLine($"Does the string '{unvalidatedString}' pass? : {answer} ");

            }
        }

        static string PromptUser()
        {
          //will only exit once user has entered a non empty string containing
            while (true)
            {
                //prompts user to enter string
                Console.WriteLine("Please enter string to be validated.");

                string unvalidatedString = Console.ReadLine();

                if (!unvalidatedString.Contains('(') && !unvalidatedString.Contains(')') || string.IsNullOrEmpty(unvalidatedString) )
                {
                    Console.WriteLine("Please enter an non empty string with atleast a '(' or a ')'");
                    continue;
                }
                return unvalidatedString;
            }
           

        }

        static bool StringValidator(string myString)
        {
            //create a stack
            Stack<char> myStack = new Stack<char>();

           
            //for each letter in the string
            foreach(char character in myString)
            {
              
                switch (character)
                {
                    case '(':
                        myStack.Push(character);
                        break;
                    case ')':
                       if( myStack.Count > 0 )
                        {
                            myStack.Pop();
                        } else
                        {
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }

            //if myStack.Count is empty, then string is good. if not it is bad
            return myStack.Count == 0;
        }



    }
}
