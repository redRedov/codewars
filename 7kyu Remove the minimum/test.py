def remove_smallest(numbers):
    if not len(numbers):
        return []
    
    index_min_number = 0
    min_number = numbers[index_min_number]
    for index, number in enumerate(numbers):
        if min_number > number:
            index_min_number = index
    
    numbers.pop(index_min_number)
    return numbers
