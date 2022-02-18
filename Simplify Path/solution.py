class Solution:
    def simplifyPath(self, path: str) -> str:
        path = [p for p in path.split('/') if p is not '']
        stack = []
        for p in path:
            if p == '.': continue
            elif p == '..': 
                if stack: stack.pop()
            else: stack += [p]
        return '/' + '/'.join(stack)
