using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Question6
{
    class Program
    {
        static void Main(string[] args)
        {

            string path = PromptUser();

            //for testing
            //string path = "D:/code/Question6/test.txt";

            //reads the file and creates a list of companies that holds its users
            List<Company> companyList = ReadFile(path);

            SortList(companyList);

            CreateOutputFiles(companyList);



        }

        static string PromptUser()
        {
            Console.WriteLine("please enter a file location");

            return Console.ReadLine();
        }

        static List<Company> ReadFile(string path)
        {
            try
            {
                StreamReader myStreamReader = new StreamReader(path);
                List<Company> myCompanyList = new List<Company>();

                while (!myStreamReader.EndOfStream)
                {
                   string currentLine = myStreamReader.ReadLine();

                   string[] arrayOfStrings = currentLine.Split(',');

                    // if there are no companies, make one
                   if(myCompanyList.Count == 0)
                    {
                        myCompanyList.Add(new Company(arrayOfStrings[3]));
                        myCompanyList[0].UserList.Add(new User(arrayOfStrings[0], arrayOfStrings[1], Convert.ToInt32(arrayOfStrings[2]), arrayOfStrings[3]) );
                    }
                    else
                    {
                        //creates a new user
                        User newUser = new User(arrayOfStrings[0], arrayOfStrings[1], Convert.ToInt32(arrayOfStrings[2]), arrayOfStrings[3]);
                        bool foundCompany = false;

                        // there are companies so lets look for a match
                        foreach(Company tempCompany in myCompanyList)    
                        {
                            // we have a company match, now we need to check for duplicate UserIDs
                            if (tempCompany.CompanyName.Equals(newUser.CompanyName) )
                            {
                                foundCompany = true;
                                bool duplicateUser = false;

                                //checks the userlist of the company
                               foreach(User tempUser in tempCompany.UserList)
                               {
                                    // if 2 users have same ID
                                    if (tempUser.UserID.Equals(newUser.UserID) )
                                    {
                                        duplicateUser = true;
                                        // if the new user has a bigger Version # take it in
                                        if (newUser.Version > tempUser.Version)
                                        {
                                            tempUser.Version = newUser.Version;
                                          
                                        }
                                    }
                                }
                                // no duplicate user; needs to be added to user list
                                if(duplicateUser == false)
                                {
                                    tempCompany.UserList.Add(newUser);
                                }
                            }
                        }
                        // no matching company was found; need to add it to company list and add tempUser to it
                        if(foundCompany == false)
                        {
                            myCompanyList.Add(new Company(arrayOfStrings[3]));
                            myCompanyList[myCompanyList.Count -1].UserList.Add(new User(arrayOfStrings[0], arrayOfStrings[1], Convert.ToInt32(arrayOfStrings[2]), arrayOfStrings[3]));
                        }

                    }
                    
                    
                }

                return myCompanyList;

            }
            catch
            {
                Console.WriteLine("could not open file or data was not properly formatted");
                return null;
            }
        }

        static void SortList(List<Company> myCompanyList)
        {
            foreach(Company company in myCompanyList)
            {
                company.UserList.Sort(delegate(User x, User y) 
                {
                    if (x.UserName == null && y.UserName == null) return 0;
                    else if (x.UserName == null) return -1;
                    else if (y.UserName == null) return 1;
                    else return x.UserName.CompareTo(y.UserName);
                });
            }
        }

        static void CreateOutputFiles(List<Company> myCompanyList)
        {
            foreach( Company tempCompany in myCompanyList)
            {
                //check to see if file exists

                string fileName = $"{tempCompany.CompanyName}.csv";

                if (File.Exists(fileName))
                {
                    File.Delete(fileName);
                }

                using (FileStream fs = File.Create(fileName))
                {
                    foreach(User tempUser in tempCompany.UserList)
                    {
                        byte[] data = new UTF8Encoding(true).GetBytes($"{tempUser.UserID}, {tempUser.UserName}, {tempUser.Version}, {tempUser.CompanyName}\n");
                        fs.Write(data, 0, data.Length);
                    }

                }

            }
        }


    }
    class Company
    {
        public string CompanyName { get; set; }
        public List<User> UserList;

        public Company(string company)
        {
            CompanyName = company.Trim();
            UserList = new List<User>();
        }
    }

    class User
    {

        public string UserID { get; set; }
        public string UserName { get; set; }
        public int Version { get; set; }
        public string CompanyName { get; set; }

        public User(string userID, string userName, int version, string company)
        {
            UserID = userID.Trim();
            UserName = userName.Trim();
            Version = version;
            CompanyName = company.Trim();
        }



    }

}
