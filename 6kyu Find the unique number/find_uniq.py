def find_uniq(arr):
    first, second, third = arr[:3]
    
    if first in (second, third):
        repeated = first
    else:
        return first

    set_arr = set(arr)
    set_arr.remove(repeated)
    return set_arr.pop()