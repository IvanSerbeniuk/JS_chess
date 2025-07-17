def two_sum(arr, tar):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == tar:
                return [arr[i], arr[j]]

    
    return None





print(two_sum([2, 7, 11, 15], 9)  )

