// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
// | member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
// |         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1, C2    | Curry, Cake      |
// |         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
// |         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
// |         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// |         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// |         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1, M1    | Falafal, Mousse  |
// |         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1, P2    | Goulash, Pasca   |
// |         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+

// 1)- The columns violated the 1NF are:
//     food_code and the food_description column, due to multi information in one column.

// 2)-food_description: can be extended to three columns => main_dish, drink and dessert.

// 3)- table_1 "members",(member_id, member_name, member_address).
//     table_2 "dinner" ,(dinner_id, dinner_date, member_id).
//     table_3 "venue" ,(venue_code, venue_description, dinner_id).
//     table_4 "food" ,(food_code, food_description, venue_code)
