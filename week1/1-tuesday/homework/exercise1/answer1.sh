# ### STEP 1: Create a file tree
# |-- ~
#     |-- digitalcrafts
#         |-- projects
#             |-- cli101
#                 |-- hello.txt
#             |-- mysite
#                 |-- index.html
#             |-- files
#                 |-- question1.txt
#                 |-- question2.txt
#                 |-- question3.md
#                 |-- <someCompany>.info
#                 |-- remove-me-1.txt
#                 |-- remove-me-2.txt
mkdir digitalcrafts;
mkdir digitalcrafts/projects;
mkdir digitalcrafts/projects/cli101;
touch digitalcrafts/projects/cli101/hello.txt;
mkdir digitalcrafts/projects/mysite;
touch digitalcrafts/projects/mysite/index.html;
mkdir digitalcrafts/projects/files;
touch digitalcrafts/projects/question1.txt;
touch digitalcrafts/projects/question2.txt;
touch digitalcrafts/projects/question3.txt;
touch digitalcrafts/projects/DC_flex.info;
touch digitalcrafts/projects/remove-me-1.txt;
touch digitalcrafts/projects/remove-me-2.txt;

# 1. Place the words _hello world_ into **hello.txt**
echo "_hello world_" > digitalcrafts/projects/cli101/hello.txt;
# 2. Place the string `<html></html>` into **index.html**
echo "<html></html>" > digitalcrafts/projects/mysite/index.html;
# 3. Insert answers to the following questions into the 3 **question** files
#     * What is your name?
#     * What is your quest?
#     * What is your favorite color?
echo "Rudy" > digitalcrafts/projects/question1.txt;
echo "Learn how to Program." > digitalcrafts/projects/question2.txt;
echo "Orange" >digitalcrafts/projects/question3.txt;
# 4. Lastly, append why your quest is important to you to **question2.txt** without deleting the content you create earlier. 
echo "To build a successful career." >> digitalcrafts/projects/question2.txt;