import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { useErrorHandler } from '@/hooks/use-error-handler';
import { formatWorkoutRequest, getStatsFormWorkout } from '@/libs/utils';
import { createWorkout } from '@/services/workouts';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SaveWorkoutScreen() {
  const router = useRouter()
  const { form } = useWorkoutContext();
  const { handleError } = useErrorHandler();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const elapsedMinutes = useMemo(() => {
    const startedAt = form.getValues('startedAt');
    const finishedAt = new Date();
    const duration = finishedAt.getTime() - startedAt.getTime();
    return Math.floor(duration / 1000 / 60);
  }, [form.getValues('startedAt')]);

  const stats = getStatsFormWorkout(form.getValues() as any);

  const handleSaveWorkout = async() => {
    setIsSaving(true);
    const formWorkout = form.getValues();
    console.log('[]', JSON.stringify(formWorkout, null, 2))
    const request = formatWorkoutRequest(formWorkout);
    console.log('[request]',JSON.stringify(request, null, 2))
    const response = await createWorkout(request)
    if (!response.success) {
      handleError(response)
      setIsSaving(false)
      return;
    }
    setIsSaving(false)
    console.log("SE GUARDO EL WORKOUT")
    router.replace('/(tabs)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Controller
          name='title'
          control={form.control}
          render={({ field }) => (
            <Input {...field} onChangeText={field.onChange} placeholder='Título del entrenamiento' style={styles.titleInput} />
          )}
        />
        <View style={styles.header}>
          <View>
            <Text style={styles.headerItemLabel}>Duración</Text>
            <Text style={styles.headerItemValue}>{elapsedMinutes}min</Text>
          </View>
          <View>
            <Text style={styles.headerItemLabel}>Volumen</Text>
            <Text style={styles.headerItemValue}>{stats.volume} kg</Text>
          </View>
          <View>
            <Text style={styles.headerItemLabel}>Series</Text>
            <Text style={styles.headerItemValue}>{stats.sets}</Text>
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>Descripción</Text>
        <Input placeholder='Cómo ha ido tu entrenamiento? Deja algunas notas aquí...' multiline={true} />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>Guardar como plantilla?</Text>
        <Controller
          name='isTemplate'
          control={form.control}
          render={({ field }) => <Checkbox {...field} onValueChange={field.onChange} style={styles.checkbox} />}
        />
      </View>
     <View style={styles.screenActions}>
            <Button style={styles.button} variant='ghost' onPress={() => router.back()}>
              <Text style={styles.discardButton}>Cancelar</Text>
            </Button>
            <Button
              style={styles.button}
              variant='gradient'
              onPress={handleSaveWorkout}
              loading={isSaving}
            >
              <Text>Guardar</Text>
            </Button>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.stepperInactive,
    borderRadius: 4,
    height: 24,
    width: 24
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  titleInput: {
    paddingVertical:0,
    paddingHorizontal: 0,
    marginBottom: 32,
    fontSize: 24,
    fontWeight: 'bold'
  },
  screenActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  discardButton: {
    color: colors.danger,
  },
  descriptionContainer: {
    marginVertical: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.inputPlaceholder
  },
  descriptionLabel: {
    fontSize: 12
  },
  header: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerItemLabel: {
    fontSize: 12,
    color: colors.inputPlaceholder
  },
  headerItemValue: {
    fontSize: 16,
    lineHeight: 24
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20
  }
});
