/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *prev = NULL, *curr = head, *next = NULL;
        while(curr != nullptr) {
            // swap pointers
            next = curr->next;
            curr->next = prev;
            
            // update position
            prev = curr;
            curr = next;
        }
        head = prev;
        
        return head;
    }
};
