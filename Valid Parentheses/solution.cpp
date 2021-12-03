class Solution {
public:
    bool isValid(string s) {
        stack<char> brackets;
        for(const char& x: s) {
            if(x == '{')
                brackets.push(x);
            else if(x == '(')
                brackets.push(x);
            else if(x == '[')
                brackets.push(x);

            if(x == ')' or x == '}' or x == ']') {
                if(brackets.empty())
                    return 0;
                else {
                    if(x == '}' and brackets.top() == '{') 
                        brackets.pop();
                    else if(x == ')' and brackets.top() == '(') 
                        brackets.pop();
                    else if(x == ']' and brackets.top() == '[') 
                        brackets.pop();
                    else 
                        return 0;
                }
            }
    }

    if(brackets.empty())
        return 1;
    else
        return 0;

    return 0;

    }
    
};
