#include<iostream>
#include<string>
#include<stack>
using namespace std;

int check_bracket(string s)
{
	stack<char> st;
	int flag = 0;
	for(int i = 0; i < s.length() ; i++)
	{
		char c = s[i];
		if(c == '(' || c == '{' || c == '[')
		{
			st.push(c);
		}
		else if(c == ')' && st.top() == '(')
		{
			st.pop();
		}
		else if(c == ']' && st.top() == '[')
		{
			st.pop();
		}
		else if(c == '}' && st.top() == '{')
		{
			st.pop();
		}
		else if(( c >= 'a' && c <= 'z') || ( c >= 'A' && c <= 'Z') || ( c >= '-50' && c <= '50'))
		{
			continue;
		}
		else{
			flag = 1;
		}
	}
	return flag;
}

int main()
{
	string s;
	cout<<"Enter string: ";
	cin>>s;
	int flag = check_bracket(s);
	if(flag == 0)
	{
		cout<<"Perfect"<<endl;
	}
	else
	{
		cout<<"Imperfect"<<endl;
	}
	return 0;
}