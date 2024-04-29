function extractSpecialAttacks({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description
    }));
  }
  
  describe('extractSpecialAttacks function', () => {
    it('should return an array of objects with id, name, icon, and description fields extracted from special attacks', () => {
      const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
          }
        ]	
      };
  
      const expected = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ];
  
      expect(extractSpecialAttacks(character)).toEqual(expected);
    });
  
    it('should return an array of objects with default description if description field is missing', () => {
      const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
          }
        ]	
      };
  
      const expected = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Описание недоступно'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ];
  
      expect(extractSpecialAttacks(character)).toEqual(expected);
    });
  });
  